"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import ReactDatePicker from 'react-datepicker';
import { Input } from "./ui/input";


const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: ""
  })

  const [callDetails, setCallDetails] = useState<Call>()
  const { toast } = useToast()

  const {user} = useUser();
  const client = useStreamVideoClient();

  // Function to handle creating a meeting
  const createMeeting = async () => {
    if(!client || !user) return;

    try {
      if(!values.dateTime){
        toast({title: "Please select a date and time",})
      }

      const id = crypto.randomUUID(); // generates random id  
      const call = client.call("default", id);

      if(!call) throw new Error("Failed to Create a Call")

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description
          }
        }
      });

      setCallDetails(call);

      if(!values.description){
        router.push(`/meeting/${call.id}`);
      }

      toast({title: "Meeting Created"})
    } catch (error) {
      console.log(error);
      toast({title: "Failed to create meeting", variant:"destructive"})
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {/* New Meeting Card */}
      <HomeCard
        img="/icons/add-personal.svg"
        title="New Meeting"
        description="Start an instant meeting"
        backgroundColor="bg-orange-1"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />

      {/* Join Meeting Card */}
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        backgroundColor="bg-blue-2"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />

      {/* Schedule Meeting Card */}
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        backgroundColor=""
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />

      {/* View Recordings Card */}
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        backgroundColor="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />

      {/* Meeting Modal */}
      {!callDetails ? (
        <MeetingModal
        isOpen={meetingState === "isScheduleMeeting"}
        onClose={() => setMeetingState(undefined)} // Ensure state resets when modal closes
        title="Create meeting"
        handleClick={createMeeting} 
      >
        <div className="flex flex-col gap-2.5">
          <Label className="text-base text-normal leading-[22px] text-sky-2" htmlFor="description">Add a Description</Label>
          <Textarea
            onChange={(e) => {
                setValues({...values, description: e.target.value})
            }} 
            placeholder="Type your description here." 
            id="description" 
            className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-2.5">
        <Label className="text-base text-normal leading-[22px] text-sky-2">Select Date & Time</Label>
        <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none cursor-pointer"
            />
        </div>
      </MeetingModal>
      ) : (
        <MeetingModal
        isOpen={meetingState === "isScheduleMeeting"}
        onClose={() => setMeetingState(undefined)} // Ensure state resets when modal closes
        title="Meeting Created"
        className="text-center"
        buttonText="Copy Meeting Link"
        handleClick={() => {
          navigator.clipboard.writeText(meetingLink);
          toast({title: "Link copied"})
        }} 
        image="/icons/checked.svg"
        buttonIcon="/icons/copy.svg"
        
      />
      )}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)} // Ensure state resets when modal closes
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting} // Trigger createMeeting on button click
      />

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)} // Ensure state resets when modal closes
        title="Paste Link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)} // Trigger createMeeting on button click
      >
        <Input 
          placeholder="Meeting link" className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => {
            setValues({...values, link: e.target.value})
          }}
        />
      </MeetingModal>
    </section>
  );
};

export default MeetingTypeList;

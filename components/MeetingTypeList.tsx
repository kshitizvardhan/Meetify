"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";


const MeetingTypeList = () => {

  const router = useRouter();
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>(undefined);
  
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-personal.svg"
        title="New Meeting"
        description="Start an instant meeting"
        backgroundColor="bg-orange-1"
        handleClick={() => {setMeetingState('isInstantMeeting')}}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        backgroundColor="bg-blue-2"
        handleClick={() => {setMeetingState('isJoiningMeeting')}}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        backgroundColor=""
        handleClick={() => {setMeetingState('isScheduleMeeting')}}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        backgroundColor="bg-yellow-1"
        handleClick={() => {router.push('/recordings')}}
      />
    </section>
  );
};

export default MeetingTypeList;

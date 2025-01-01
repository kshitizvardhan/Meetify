"use client";
import React from "react";
import HomeCard from "./HomeCard";

const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        backgroundColor="bg-orange-1"
        handleClick={() => {}}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        backgroundColor="bg-blue-2"
        handleClick={() => {}}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        backgroundColor=""
        handleClick={() => {}}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        backgroundColor="bg-yellow-1"
        handleClick={() => {}}
      />
    </section>
  );
};

export default MeetingTypeList;

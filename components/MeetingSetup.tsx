"use client"
import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({setIsSetupComplete} : {
  setIsSetupComplete: (value: boolean) => void
}) => {
    const [isMicCamToggled, setIsMicCamToggled] = useState(false);

    const call = useCall();

    if(!call){
        throw new Error("useCall must be used within Stream Call Component")
    }

    useEffect(() => {
        if(isMicCamToggled) {
            call?.camera.disable()
            call?.microphone.disable()
        } else {
            call?.camera.enable()
            call?.microphone.enable()
        }
    },[isMicCamToggled, call?.camera, call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white font-poppins'>
        <h1 className='text-2xl font-bold' >Setup Video & Microphone</h1>
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-normal text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => setIsMicCamToggled(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button className="rounded-md bg-blue-2 px-4 py-2.5" onClick={() => {
        call.join();
        setIsSetupComplete(true);
      }}>
        Join meeting
      </Button>
    </div>
  )
}

export default MeetingSetup
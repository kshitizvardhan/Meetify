import React, { ReactNode } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter } from './ui/animated-modal'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface MeetingModalProps{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    buttonText?: string;
    handleClick?: () => void;
    image?: string;
    buttonIcon?: string
}

const MeetingModal = ({isOpen, onClose, title, className, children, buttonText, handleClick, image, buttonIcon } : MeetingModalProps) => {
    
    return (
    <div className="flex flex-col items-center justify-center">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody>
          <ModalContent className='flex w-full flex-col gap-6 px-6 py-9 text-white'>
            <div className='flex flex-col gap-6'>
                {image && (
                    <div className='flex justify-center'>
                        <Image src={image} alt="image" width={72} height={72} />
                    </div>
                )}
                <h1 className={cn("text-lg md:text-3xl font-bold text-center mb-8", className)}>
                    {title}
                </h1>
                {children}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 items-center justify-center">
            <Button className="bg-blue-2 text-white text-sm px-2 rounded-md border-none w-96 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
                {buttonIcon && (
                    <Image src={buttonIcon} alt={buttonIcon} width={13} height={13} />
                )} &nbsp;
               {buttonText || "Schedule Meeting"}
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default MeetingModal
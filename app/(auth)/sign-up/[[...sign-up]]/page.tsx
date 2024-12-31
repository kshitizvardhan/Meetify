import { BackgroundLines } from '@/components/ui/background-lines'
import { SignUp } from '@clerk/nextjs'
import React from 'react'


const SignUpPage = () => {
  return (
    <BackgroundLines>
        <main className='flex h-screen w-full items-center justify-center'>
            <SignUp/>
        </main>
    </BackgroundLines>
  )
}

export default SignUpPage
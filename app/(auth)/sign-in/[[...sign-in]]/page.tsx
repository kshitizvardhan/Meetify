import Footer from '@/components/Footer'
import { BackgroundLines } from '@/components/ui/background-lines'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <BackgroundLines>
        <main className='flex h-screen w-full items-center justify-center'>
            <SignIn/>
        </main>
        <Footer/>
    </BackgroundLines>
  )
}

export default SignInPage
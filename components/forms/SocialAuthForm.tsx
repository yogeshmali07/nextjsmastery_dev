"use client";

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import ROUTES from '@/constants/route';

const SocialAuthForm = () => {
    const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer';

    const handleSignIn = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
                redirect: true,
            })
        } catch (error) {
            console.log(error);
            toast.error('Sign-in Failed', {
                description: error instanceof Error ? error.message : 'Please try again or use a different provider.',
              });
        }
    }

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
        <Button className={buttonClass} onClick={() => handleSignIn("github")}>
            <Image
                src='/icons/github.svg'
                alt='Github Logo'
                width={20}
                height={20}
                className='invert-colors mr-2.5 object-contain'
            />
            <span>Login with GitHub</span>
        </Button>

        <Button className={buttonClass} onClick={() => handleSignIn("google")}>
            <Image
                src='/icons/google.svg'
                alt='Googele Logo'
                width={20}
                height={20}
                className=' mr-2.5 object-contain'
            />
            <span>Login with Google</span>
        </Button>
    </div>
  )
}

export default SocialAuthForm
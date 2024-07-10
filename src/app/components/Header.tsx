import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Header = () => {
  return (
    <header className='flex flex-row items-center justify-between p-4 bg-slate-800'>
      <div className='mb-4 sm:mb-0'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className='mb-4 sm:mb-0'>
      <HoverCard>
        <HoverCardTrigger className='font-bold text-center sm:text-left text-xl sm:text-2xl underline text-white hover:opacity-70'>The European Engineer</HoverCardTrigger>
        </HoverCard>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger className='px-4 py-2 bg-white text-blue-800 rounded hover:opacity-80'>Subscribe</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Join our Newsletter</AlertDialogTitle>
              <AlertDialogDescription>
                Stay updated with our latest news and offers. Enter your email to subscribe to our newsletter.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Subscribe</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  )
}

export default Header

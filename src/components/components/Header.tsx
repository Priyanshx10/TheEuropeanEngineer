import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
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
} from '@/components/ui/alert-dialog';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <HoverCard>
            <HoverCardTrigger>
              <h1 className="text-2xl font-bold text-white hover:opacity-70 transition-opacity">
                The European Engineer
              </h1>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-gray-400">
                Number 1 Newsletter on Tech Careers in Europe
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger>
              <button className="bg-white text-blue-800 font-medium py-2 px-4 rounded hover:opacity-80 transition-opacity">
                Subscribe
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Join our Newsletter</AlertDialogTitle>
                <AlertDialogDescription>
                  Stay updated with our latest news and offers. Enter your email to
                  subscribe to our newsletter.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Subscribe</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
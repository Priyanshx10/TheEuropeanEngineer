'use client'

import React from 'react';
import Feature from '../components/components/Feature'
import HeroSection from '@/components/components/HeroSeaction';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <Feature />

    </div>
  );
}
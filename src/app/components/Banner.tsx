'use client'
import Image from 'next/image';
import React from 'react';
import GridBg from '../../../assets/images/grid-bg.png';
import Link from 'next/link';

export function Banner() {
  return (
    <div className='py-8'>
      <div className='flex justify-center'>
          <Link 
          href={'/battle'}
          className=''>
            <p className='text-shadow-md text-sm text-white md:max-w-lg md:text-lg lg:max-w-2xl'>
              Select your Characters and start your battle
            </p>
          </Link>

      </div>
      <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
          <Image
            className='opacity-70'
            src={GridBg}
            fill
            quality={100}
            alt='Banner'
          />
        </div>
      </div>
    </div>
  );
}

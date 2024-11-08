import Image from 'next/image.js';
import React from 'react';

export const Logo = () => (
  <Image
    src='/rolemaster.png'
    alt='Logo'
    width={90}
    height={90}
    className='cursor-pointer' />
);

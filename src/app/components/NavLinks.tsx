'use client';
import Link from 'next/link';
export const NavLinks = () => (
  <nav>
    <ul className='hidden md:flex md:space-x-4'>
      <Link href='/search?profession=warrior'>Warrior</Link>
      <Link href='/search?profession=mage'> Mage </Link>
      <Link href='/search?profession=ranger'>Ranger</Link>
      <Link href='/search?profession=burglar'> Burglar </Link>
    </ul>
  </nav>
);

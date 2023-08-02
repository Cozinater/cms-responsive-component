'use client';

import { BsArrowLeftCircle } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();
  return (
    <div className='h-24 flex box-shadow-btm bg-white'>
      <div className='max-w-5xl flex flex-grow items-center px-6 py-2 m-auto'>
        <button onClick={() => router.back()}>
          <BsArrowLeftCircle className='flex' size={32} />
        </button>

        <div className='flex gap-2 items-center m-l-auto'>
          <h4>Raymond</h4>
          <CgProfile className='flex' size={34} />
        </div>
        <Image src='/toggleColorIcon.png' alt='toggle' width='32' height='32' className='m-l-auto' />
      </div>
    </div>
  );
}

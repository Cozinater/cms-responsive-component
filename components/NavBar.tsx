import { BsArrowLeftCircle } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className='h-24 flex box-shadow-btm bg-white'>
      <div className='max-w-5xl flex flex-grow items-center px-6 py-2'>
        <BsArrowLeftCircle className='flex' size={32} />
        <div className='flex gap-2 items-center m-l-auto'>
          <h1>Joanne</h1>
          <CgProfile className='flex' size={34} />
        </div>
        <Image src='/toggleColorIcon.png' alt='toggle' width='32' height='32' className='m-l-auto' />
      </div>
    </div>
  );
}

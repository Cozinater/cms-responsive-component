'use client';

import Card from '@/components/display/card';
import { Button } from 'primereact/button';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Home() {
  return (
    <div className='p-8'>
      <div className='flex flex-grow items-center'>
        <h1 className='font-bold'>Profiles</h1>
        <Button className='flex text-white bg-pri items-center gap-2 m-l-auto rounded px-4 py-2' rounded>
          <AiOutlinePlusCircle size={24} />
          <h3>New Profile</h3>
        </Button>
      </div>
      <div className='m-4 grid gap-4'></div>
      <Card name={'Tom'} gender={'Male'} age={'20'} email={'tom.tan123@gmail.com'} />
      <Card name={'Tom'} gender={'Male'} age={'20'} email={'tom.tan123@gmail.com'} />
    </div>
  );
}

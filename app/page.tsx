'use client';

import Card from '@/components/display/card';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import useLocalStorage from '@/hooks/useLocalStorage';

export default function Home() {
  const [profileValues, setProfileValues] = useLocalStorage('profiles', {});
  console.log(profileValues);
  return (
    <div className='p-8'>
      <div className='flex flex-grow items-center'>
        <h1 className='font-bold'>Profiles</h1>
        <Link href={'/newProfile'} className='m-l-auto'>
          <Button className='flex text-white bg-pri items-center gap-2 rounded px-4 py-2'>
            <AiOutlinePlusCircle size={24} />
            <h3>New Profile</h3>
          </Button>
        </Link>
      </div>
      <div className='m-4 grid gap-4'></div>
      {Object.keys(profileValues).map((key: string) => {
        return (
          <Card
            key={key}
            name={profileValues[key].name}
            gender={profileValues[key].gender}
            age={profileValues[key].age}
            email={profileValues[key].email}
          />
        );
      })}
    </div>
  );
}

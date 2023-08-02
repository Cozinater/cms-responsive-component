'use client';

import { Button } from 'primereact/button';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

type Inputs = {
  name: string;
  age: string;
  email: string;
  gender: GenderEnum;
};

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

export default function NewProfile() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className='p-8'>
      <h1 className='font-bold'>New Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className='text-pri w-full'>
          <tr className='flex'>
            <td width={'60%'} className='grid p-4'>
              <label htmlFor='name'>Name</label>
              <input
                {...register('name', {
                  required: 'Required',
                })}
              />
              {errors.name ? <div>{errors.name.message}</div> : <div className='h-6'></div>}
            </td>
            <td className='grid p-4'>
              <label>Age</label>
              <input
                type='number'
                {...register('age', {
                  required: 'Required',
                })}
              />
              {errors.age ? <div>{errors.age.message}</div> : <div className='h-6'></div>}
            </td>
          </tr>
          <tr className='flex'>
            <td className='grid p-4' width={'60%'}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                {...register('email', {
                  required: 'Required',
                })}
              />
              {errors.email ? <div>{errors.email.message}</div> : <div className='h-6'></div>}
            </td>
            <td className='grid p-4'>
              <label>Gender</label>
              <select {...register('gender')}>
                <option value='female'>female</option>
                <option value='male'>male</option>
                <option value='other'>other</option>
              </select>
              {errors.gender ? <div>{errors.gender.message}</div> : <div className='h-6'></div>}
            </td>
          </tr>
        </table>

        <Button type='submit' className='flex text-white bg-pri items-center gap-2 rounded px-4 py-2'>
          <AiOutlinePlusCircle size={24} />
          <h3>Create Profile</h3>
        </Button>
      </form>
    </div>
  );
}

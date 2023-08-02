import { CgProfile } from 'react-icons/cg';

export default function Card({ name, gender, age, email }: Card) {
  return (
    <div className='h-44 flex shadow-md rounded p-4 gap-4 max-w-md'>
      <CgProfile className='flex my-auto' size={90} />
      <div className='flex flex-col w-full'>
        <table>
          <tr className='text-sec'>
            <td width={'60%'}>
              <h4>Name</h4>
            </td>
            <td>
              <h4>Gender</h4>
            </td>
            <td>
              <h4>Age</h4>
            </td>
          </tr>
          <tr className='text-pri'>
            <td>
              <h3>{name}</h3>
            </td>
            <td>
              <h3>{gender}</h3>
            </td>
            <td>
              <h3>{age}</h3>
            </td>
          </tr>
        </table>
        <div className='m-t-auto'>
          <h4 className='text-sec'>Email</h4>
          <h3 className='text-pri'>{email}</h3>
        </div>
      </div>
    </div>
  );
}

interface Card {
  name: string;
  gender: string;
  age: string;
  email: string;
}

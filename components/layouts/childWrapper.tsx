export default function ChildrenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-6 my-4 flex-grow'>
      <div className='max-w-5xl m-auto bg-white flex-grow'>{children}</div>
    </div>
  );
}

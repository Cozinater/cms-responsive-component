export default function ChildrenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-5xl m-auto mx-6 my-4 bg-white'>
      <div>{children}</div>
    </div>
  );
}

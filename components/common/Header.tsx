import { Bell, Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white'>
      <div className='flex h-14 items-center justify-between px-4'>
        <Link href='/' className='flex items-center'>
          <h1>DOKKO</h1>
        </Link>
        <div className='flex items-center gap-3'>
          <div className='hover:bg-secondary rounded-lg p-2 transition-colors'>
            <Link href='/search'>
              <Search className='text-foreground h-5 w-5' />
            </Link>
          </div>
          <button className='hover:bg-secondary relative rounded-lg p-2 transition-colors'>
            <Bell className='text-foreground h-5 w-5' />
            <span className='bg-accent absolute top-1.5 right-1.5 h-2 w-2 rounded-full'></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

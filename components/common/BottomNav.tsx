'use client';

import { Home, MessageCircle, PlusCircle, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: '홈', path: '/' },
    { icon: MessageCircle, label: '채팅', path: '/chat' },
    { icon: PlusCircle, label: '판매하기', path: '/product/create' },
    { icon: User, label: '마이페이지', path: '/mypage' },
  ];

  return (
    <nav className='fixed right-0 bottom-0 left-0 z-50 border-t bg-white'>
      <div className='mx-auto flex h-16 max-w-lg items-center justify-around'>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.path}
              href={item.path}
              className='flex h-full flex-1 flex-col items-center justify-center gap-1 transition-colors'
            >
              <Icon className='text-muted-foreground h-6 w-6 transition-colors' />
              <span className='text-muted-foreground text-xs transition-colors'>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;

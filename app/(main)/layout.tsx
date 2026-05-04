import Header from '@/components/common/Header';
import BottomNav from '@/components/common/BottomNav';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <Header />
      <main className='pt16 mx-auto w-full max-w-[1440px] flex-1 px-4 pb-20'>
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

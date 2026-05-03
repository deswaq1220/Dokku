import BottomNav from '@/components/common/BottomNav';
import { createClient } from '../utils/supabase/server';
import Header from '@/components/common/Header';

export default async function Home() {
  // 1. 슈퍼베이스 연결!
  const supabase = await createClient();

  // 2. 가볍게 찔러보기 (현재 로그인된 세션이 있는지 물어보기)
  const { data, error } = await supabase.auth.getSession();

  return (
    <main className='p-10'>
      <Header />
      <h1 className='mb-4 text-3xl font-bold'>
        🚀 Supabase 연결 테스트!!!!???
      </h1>

      <div className='rounded-lg bg-gray-100 p-4 shadow'>
        <h2 className='mb-2 text-lg font-semibold'>테스트 결과:</h2>
        <pre className='overflow-auto text-sm'>
          {JSON.stringify({ data, error }, null, 2)}
        </pre>
      </div>
      <BottomNav />
    </main>
  );
}

'use client';
import { ArrowLeft, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (query: string) => void;
  onClear: () => void;
};

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  onClear,
}: Props) => {
  const router = useRouter();
  return (
    <div className='sticky top-0 z-50 border-b bg-white'>
      <div className='flex items-center gap-3 p-4'>
        <button
          onClick={() => router.back()}
          className='hover:bg-secondary rounded-lg p-2 transition-colors'
        >
          <ArrowLeft className='h-5 w-5' />
        </button>
        <div className='relative flex-1'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch(searchQuery)}
            placeholder='어떤 굿즈를 찾으세요?'
            autoFocus
            className='bg-muted focus:ring-primary w-full rounded-full py-2.5 pr-10 pl-4 focus:ring-2 focus:outline-none'
          />
          {searchQuery && (
            <button
              onClick={onClear}
              className='hover:bg-muted absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 transition-colors'
            >
              <X className='text-muted-foreground h-4 w-4' />
            </button>
          )}
        </div>
        {searchQuery && (
          <button
            onClick={() => onSearch(searchQuery)}
            className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 font-medium transition-colors'
          >
            검색
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

import { Clock, X } from 'lucide-react';

type Props = {
  searches: string[];
  onSearch: (keyword: string) => void;
  onRemove: (keyword: string) => void;
  onClearAll: () => void;
};
const RecentSearches = ({
  searches,
  onSearch,
  onRemove,
  onClearAll,
}: Props) => {
  if (searches.length === 0) return null;
  return (
    <div>
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Clock className='text-muted-foreground h-4 w-4' />
          <h2 className='font-semibold'>최근 검색</h2>
        </div>
        <button
          onClick={onClearAll}
          className='text-muted-foreground hover:text-foreground text-sm transition-colors'
        >
          전체 삭제
        </button>
      </div>
      <div className='flex flex-wrap gap-2'>
        {searches.map((keyword) => (
          <div
            key={keyword}
            className='bg-card flex items-center gap-2 rounded-full border px-4 py-2'
          >
            <button
              onClick={() => onSearch(keyword)}
              className='hover:text-primary text-sm transition-colors'
            >
              {keyword}
            </button>
            <button
              onClick={() => onRemove(keyword)}
              className='hover:bg-muted rounded-full p-0.5 transition-colors'
            >
              <X className='text-muted-foreground h-3 w-3' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;

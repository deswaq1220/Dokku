import { TrendingUp } from 'lucide-react';

const trendingKeywords = [
  '르세라핌',
  '뉴진스',
  '원피스 피규어',
  'BTS 앨범',
  '귀멸의 칼날',
  '에스파',
  '스파이 패밀리',
  '포켓몬카드',
];

type Props = {
  onSearch: (keyword: string) => void;
};

const TrendingKeywords = ({ onSearch }: Props) => {
  return (
    <div>
      <div className='mb-3 flex items-center gap-2'>
        <TrendingUp className='text-accent h-4 w-4' />
        <h2 className='font-semibold'>인기 검색어</h2>
      </div>
      <div className='space-y-2'>
        {trendingKeywords.map((keyword, index) => (
          <button
            key={keyword}
            onClick={() => onSearch(keyword)}
            className='hover:bg-muted flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors'
          >
            <span
              className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-xs font-bold ${index < 3 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
            >
              {index + 1}
            </span>
            <span className='flex-1'>{keyword}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingKeywords;

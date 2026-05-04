'use client';

import { useEffect, useState } from 'react';
import RecentSearches from './_components/RecentSearches';
import SearchResults from './_components/SearchResults';
import SearchBar from './_components/SearchBar';
import TrendingKeywords from './_components/TrendingKeywords';
import { useRouter, useSearchParams } from 'next/navigation';

const mockResults = [
  {
    id: 1,
    title: '르세라핌 앨범 포카 세트',
    price: 25000,
    location: '강남구',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
  },
  {
    id: 2,
    title: '르세라핌 공식 굿즈 미공포',
    price: 35000,
    location: '마포구',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
  },
  {
    id: 3,
    title: '르세라핌 콘서트 응원봉',
    price: 45000,
    location: '송파구',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
  },
];

const initialRecentSearches = ['아이브 포카', '건담 프라모델', '세일러문 굿즈'];

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get('q'); // url에서 q값 가져오기

  const [searchQuery, setSearchQuery] = useState(currentQuery || '');
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState(initialRecentSearches);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // 최근 검색어 추가
      if (!recentSearches.includes(query)) {
        setRecentSearches([query, ...recentSearches.slice(0, 4)]);
      }
      //state 바꾸는 대신에 URL 이동시키기 브라우저 방문 기록이 쌓여서 뒤로가기 함
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    router.push('/search');
  };

  useEffect(() => {
    setSearchQuery(currentQuery || '');
  }, [currentQuery]);

  return (
    <div className='bg-background min-h-screen'>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      {!currentQuery ? (
        <div className='space-y-6 p-4'>
          <RecentSearches
            searches={recentSearches}
            onSearch={handleSearch}
            onRemove={(keyword) =>
              setRecentSearches(recentSearches.filter((k) => k !== keyword))
            }
            onClearAll={() => setRecentSearches([])}
          />
          <TrendingKeywords onSearch={handleSearch} />
        </div>
      ) : (
        <SearchResults query={currentQuery} results={mockResults} />
      )}
    </div>
  );
}

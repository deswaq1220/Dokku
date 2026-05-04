'use client';

import { useState } from 'react';
import CategoryFilter from '../_components/CategoryFilter';
import ProductGrid from '../_components/ProductGrid';

const mockProducts = [
  {
    id: 1,
    title: '르세라핌 앨범 포카 세트',
    price: 25000,
    location: '강남구',
    timeAgo: '1시간 전',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
    likes: 12,
    category: 'K-POP',
  },
  {
    id: 2,
    title: '원피스 피규어 루피 기어5',
    price: 89000,
    location: '마포구',
    timeAgo: '3시간 전',
    image: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400',
    likes: 28,
    category: '피규어',
  },
  {
    id: 3,
    title: '뉴진스 공식 굿즈 미공포',
    price: 35000,
    location: '송파구',
    timeAgo: '5시간 전',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
    likes: 45,
    category: 'K-POP',
  },
  {
    id: 4,
    title: '귀멸의 칼날 아크릴 스탠드',
    price: 15000,
    location: '서초구',
    timeAgo: '6시간 전',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400',
    likes: 8,
    category: '애니메이션',
  },
  {
    id: 5,
    title: 'BTS 앨범 풀세트 (미개봉)',
    price: 120000,
    location: '관악구',
    timeAgo: '8시간 전',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    likes: 62,
    category: 'K-POP',
  },
  {
    id: 6,
    title: '스파이 패밀리 아냐 인형',
    price: 32000,
    location: '영등포구',
    timeAgo: '1일 전',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    likes: 19,
    category: '애니메이션',
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const filteredProducts =
    selectedCategory === '전체'
      ? mockProducts
      : mockProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className='flex flex-col gap-6'>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

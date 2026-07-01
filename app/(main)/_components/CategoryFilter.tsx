const categories = [
  '전체',
  'K-POP',
  '아이돌',
  '애니메이션',
  '피규어',
  '게임',
  '만화',
  '웹툰',
];

type Props = {
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({ selectedCategory, onSelect }: Props) {
  return (
    <div className='bg-background sticky top-14 z-40 border-b'>
      <div className='scrollbar-hide flex gap-2 overflow-x-auto p-4'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

import ProductCard from '@/components/common/ProductCard';
import { Product } from '@/types/product';

type Props = {
  query: string;
  results: Product[];
};

const SearchResults = ({ query, results }: Props) => {
  return (
    <div className='p-4'>
      <p className='text-muted-foreground mb-4 text-sm'>
        "<span className='text-foreground font-medium'>{query}</span>" 검색 결과{' '}
        {results.length}개
      </p>
      <div className='grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4'>
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

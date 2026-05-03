import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
};

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
      <div className='grid grid-cols-2 gap-3'>
        {results.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className='bg-card overflow-hidden rounded-xl border transition-shadow hover:shadow-lg'
          >
            <div className='relative aspect-square'>
              <img
                src={product.image}
                alt={product.title}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='p-3'>
              <h3 className='mb-1 line-clamp-2 text-sm font-medium'>
                {product.title}
              </h3>
              <p className='text-primary mb-1 font-bold'>
                {product.price.toLocaleString()}원
              </p>
              <p className='text-muted-foreground text-xs'>
                {product.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

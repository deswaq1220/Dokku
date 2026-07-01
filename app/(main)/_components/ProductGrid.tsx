import ProductCard from '@/components/common/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  location: string;
  timeAgo: string;
  image: string;
  likes: number;
  category: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <div className='grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showLikes={true} />
      ))}
    </div>
  );
}

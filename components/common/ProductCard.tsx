import { Product } from '@/types/product';
import { Heart } from 'lucide-react';
import Link from 'next/link';

type Props = {
  product: Product;
  showLikes?: boolean; // 하트 UI를 보여줄지 결정하는 prop (기본값: false)
};
const ProductCard = ({ product, showLikes = false }: Props) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className='bg-card overflow-hidden rounded-xl border transition-shadow hover:shadow-lg'
    >
      <div className='relative aspect-square'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover'
        />
        {/* showLikes가 true일 때만 우측 상단 하트 버튼 렌더링 */}
        {showLikes && (
          <button
            className='absolute top-2 right-2 rounded-full bg-white/90 p-1.5 backdrop-blur-sm transition-colors hover:bg-white'
            onClick={(e) => {
              e.preventDefault(); // 하트 클릭 시 페이지 이동 방지
              // TODO: 좋아요 토글 로직 추가
            }}
          >
            <Heart className='text-accent h-4 w-4' />
          </button>
        )}
      </div>
      <div className='p-3'>
        <h3 className='mb-1 line-clamp-2 text-sm font-medium'>
          {product.title}
        </h3>
        <p className='text-primary mb-2 font-bold'>
          {product.price.toLocaleString()}원
        </p>

        {/* showLikes 여부에 따라 하단 레이아웃 다르게 렌더링 */}
        {showLikes ? (
          <div className='text-muted-foreground flex items-center justify-between text-xs'>
            <span>{product.location}</span>
            <div className='flex items-center gap-1'>
              <Heart className='fill-accent text-accent h-3 w-3' />
              <span>{product.likes ?? 0}</span>
            </div>
          </div>
        ) : (
          <p className='text-muted-foreground text-xs'>{product.location}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

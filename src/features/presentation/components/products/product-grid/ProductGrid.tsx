import { Product } from '@/features/domain'
import { FC } from 'react'
import { ProductGridItem } from './ProductGridItem'

interface ProductGridProps {
   products: Product[]
}

export const ProductGrid: FC<ProductGridProps> = ({ products }) => {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-10">
         {
            products.map( product => (
               <ProductGridItem product={ product } key={product.slug} />
            ))
         }
      </div>
   )
}

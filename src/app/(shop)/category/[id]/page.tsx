import { FC } from "react"
import { notFound } from "next/navigation"

import { initialData } from "@/config/seed/seed"
import { Category } from "@/features/domain/enums/categories"
import { Title } from "@/features/presentation/components/ui/title/Title"
import { ProductGrid } from "@/features/presentation/components/products/product-grid/ProductGrid"


interface CategoryPageProps {
   params: {
      id: Category 
   }
}


const CategoryPage: FC<CategoryPageProps> = ({ params }) => {   

   const { id } = params

   const products = initialData.products.filter( product => product.gender === id )

   if ( ![ Category.Kid, Category.Men, Category.Women ].includes(id) ) notFound()

   const labels: Record<Category, string> = {
      [Category.Men]: "para hombres",
      [Category.Women]: "para mujeres",
      [Category.Kid]: "para niños",
      [Category.Unisex]: "para todos"
   }

   return (
      <>
         <Title title="Artículos de " subtitle="Todos los productos" className="mb-2"/>

         <ProductGrid
            products={products}
         />
      </>
   )
}

export default CategoryPage
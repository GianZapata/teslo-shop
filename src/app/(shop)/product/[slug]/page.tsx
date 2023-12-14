
import { FC } from "react"
import { initialData } from "@/config/seed"
import { notFound } from "next/navigation"
import { titleFont } from "@/config/fonts"


import { SizeSelector } from "@/features/presentation"
import { QuantitySelector } from '@/features/presentation/components/product/quantity-selector/QuantitySelector'
import { ProductSlideshow } from "@/features/presentation/components/product/slideshow/ProductSlideshow"
import { ProductMobileSlideshow } from "@/features/presentation/components/product/slideshow/ProductMobileSlideshow"


interface Props {
   params: { slug: string }
}

const ProductsPage: FC<Props> = ({ params }) => {

   const { slug } = params

   const product = initialData.products.find( product => product.slug === slug );

   if(!product) return notFound()

   return (
      <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
         
         {/* Slideshow */}
         <div className="col-span-1 md:col-span-2">
            <ProductMobileSlideshow 
               title={product.title}
               images={product.images}
               className="block md:hidden"
            />
            <ProductSlideshow 
               title={product.title}
               images={product.images}
               className="hidden md:block"
            />
         </div>

         {/* Detalles */}
         <div className="col-span-1 px-5">

            <h1 className={`${ titleFont.className } antialiased font-bold text-xl`}>{ product.title }</h1>

            <p className="text-lg mb-5">${ product.price }</p>

            {/* Selector de tallas */}
            <SizeSelector availableSizes={ product.sizes } selectedSize={product.sizes[0]} />

            {/* Selector de cantidad */}

            <QuantitySelector
               quantity={2}
            />

            {/* Botón */}
            <button
               className="btn-primary my-5"
            >Agregar al carrito</button>

            <h3 className="font-bold text-sm">Descripción</h3>

            <p>{ product.description }</p>

         </div>
      </div>
   )
}

export default ProductsPage
import Link from "next/link"
import Image from "next/image"

import { Page } from "@/config/enums/page.enum"
import { initialData } from "@/config/seed/seed"
import { QuantitySelector } from '@/features/presentation/components/product/quantity-selector/QuantitySelector';
import { Title } from "@/features/presentation/components/ui/title/Title";

const productsInCart = [
   initialData.products[0],
   initialData.products[1],
   initialData.products[2],
]

const CartPage = () => {
   return (
      <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
         <div className="flex flex-col max-w-7xl">
            <Title
               title="Carrito"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

               <div className="flex flex-col mt-5">
                  <span className="text-xl">Agregar mas items</span>
                  <Link href={Page.Home}>Continua comprando</Link>
               
                  {
                     productsInCart.map( product => (
                        <div key={product.slug} className="flex mb-5">
                           <Image 
                              src={`/images/products/${product.images[0]}`}
                              width={100}
                              height={100}
                              alt={product.title}
                              className="mr-5 rounded"
                           />
                           <div>
                              <p>{ product.title }</p>
                              <p>{ product.price }</p>
                              <QuantitySelector
                                 quantity={1}
                              />
                              <button className="underline mt-3">Remover</button>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>

         </div>
      </div>
   )
}

export default CartPage
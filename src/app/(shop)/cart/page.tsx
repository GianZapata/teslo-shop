import Link from "next/link"
import Image from "next/image"

import { Page } from "@/config/enums/page.enum"
import { initialData } from "@/config/seed/seed"
import { QuantitySelector } from '@/features/presentation/components/product/quantity-selector/QuantitySelector';
import { Title } from "@/features/presentation/components/ui/title/Title";
import { redirect } from "next/navigation";

const productsInCart = [
   initialData.products[0],
   initialData.products[1],
   initialData.products[2],
]

const CartPage = () => {

   // redirect(Page.Empty)

   return (
      <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
         <div className="flex flex-col max-w-7xl">
            <Title
               title="Carrito"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

               <div className="flex flex-col mt-5">
                  <span className="text-xl">Agregar mas items</span>
                  <Link href={Page.Home} className="hover:underline mb-3">Continua comprando</Link>
               
                  {
                     productsInCart.map( product => (
                        <div key={product.slug} className="flex mb-5">
                           <Image 
                              src={`/images/products/${product.images[0]}`}
                              width={100}
                              height={100}
                              style={{ width: '100px', height: '100px' }}
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

               {/* Checkout - Resumen de la orden */}
               <div className="h-96 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h2 className="text-2xl mb-2">Resumen de orden</h2>

                  <div
                     id="divider"
                     className="w-full h-0.5 rounded bg-gray-200 my-3 "
                  />

                  <div className="grid grid-cols-2">
                     <span>No. Productos</span>
                     <span className="text-right">3 articulos</span>
                     <span>Subtotal</span>
                     <span className="text-right">$100</span>
                     <span>Impuestos (15%)</span>
                     <span className="text-right">$100</span>
                  </div>

                  <div
                     id="divider"
                     className="w-full h-0.5 rounded bg-gray-200 my-3"
                  />
                  <div className="grid grid-cols-2">
                     <span className="mt-3 text-xl font-bold">Total:</span>
                     <span className="mt-3 text-xl text-right font-bold">$100</span>
                  </div>

                  <div className="mt-5 mb-2 w-full">
                     <Link href={Page.CheckoutAddress} className="flex btn-primary justify-center">Checkout</Link>
                  </div>

               </div>

            </div>

         </div>
      </div>
   )
}

export default CartPage
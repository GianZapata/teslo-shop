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

const CheckoutPage = () => {
   return (
      <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
         <div className="flex flex-col max-w-7xl">
            <Title
               title="Verificar Orden"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

               <div className="flex flex-col mt-5">
                  <span className="text-xl">Ajustar elementos</span>
                  <Link href={Page.Cart} className="hover:underline mb-3">Editar carrito</Link>
               
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
                              <p>{ product.price } x 3 </p>
                              <p className="font-bold">Subtotal: ${ product.price * 3 }</p>
                           </div>
                        </div>
                     ))
                  }
               </div>

               {/* Checkout - Resumen de la orden */}
               <div className="bg-white rounded-xl p-7">

                  <h2 className="text-2xl font-bold">Dirección de entrega</h2>
                  <div className="mb-10">
                     <p className="text-xl">Gian Zapata</p>
                     <p>Av. Ejemplo 123 </p>
                     <p>Col. Centro</p>
                     <p>Colón</p>
                     <p>Ciudad de Mexico</p>
                     <p>123.123.123</p>
                  </div>

                  {/* Divider */}
                  <div
                     className="w-full h-0.5 rounded bg-gray-200 mb-10"
                  />

                  <h2 className="text-2xl mb-2">Resumen de orden</h2>
                  <div className="grid grid-cols-2">
                     <span>No. Productos</span>
                     <span className="text-right">3 articulos</span>
                     <span>Subtotal</span>
                     <span className="text-right">$ 100</span>
                     <span>Impuestos (15%)</span>
                     <span className="text-right">$ 100</span>
                     <span className="mt-5 text-2xl">Total:</span>
                     <span className="mt-5 text-2xl text-right">$ 100</span>
                  </div>

                  <div className="mt-5 mb-2 w-full">
                     <Link href={`${Page.Orders}/123`} className="flex btn-primary justify-center">Colocar orden</Link>
                  </div>

               </div>

            </div>

         </div>
      </div>
   )
}

export default CheckoutPage
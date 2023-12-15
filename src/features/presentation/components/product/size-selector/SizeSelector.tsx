
import type { FC } from "react"
import clsx from "clsx"

import type { Size } from "@/features/domain/interfaces/product.interface"


interface Props {
   selectedSize: Size,
   availableSizes: Size[]
}

export const SizeSelector: FC<Props> = ({ availableSizes, selectedSize }) => {
   return (
      <div className="my-5">
         <h3 className="font-bold mb-4">Tallas disponibles</h3>
         <div className="flex">
            {
               availableSizes.map( size => (
                  <button className={
                     clsx(
                        "mx-2 hover:underline text-lg",
                        {
                           'underline': size === selectedSize
                        }
                     )
                  } key={size}>{ size }</button>
               ))
            }
         </div>
      </div>
   )
}

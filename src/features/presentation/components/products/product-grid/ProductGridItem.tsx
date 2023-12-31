"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Product } from "@/features/domain/interfaces/product.interface"


interface ProductGridItemProps {
   product: Product
}

export const ProductGridItem: FC<ProductGridItemProps> = ({ product }) => {

   const [displayImage, setDisplayImage] = useState(product.images[0])

   return (
      <div className="rounded-md overflow-hidden fade-in">
         <Link  href={`/product/${ product.slug }`} passHref>
            <Image
               src={`/images/products/${ displayImage }`}
               alt={product.title}
               className="w-full object-cover rounded"
               width={ 500 }
               height={ 500 }
               onMouseEnter={ () => setDisplayImage( product.images[1] )}
               onMouseLeave={ () => setDisplayImage( product.images[0] )}
            />
         </Link>
         <div className="p-4 flex flex-col">
            <Link href={`/product/${ product.slug }`} passHref className="hover:text-blue-600">{ product.title }</Link>
            <span className="font-bold">${ product.price }</span>
         </div>
      </div>
   )
}

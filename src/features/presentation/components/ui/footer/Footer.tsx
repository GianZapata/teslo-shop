import Link from "next/link"

import { Page } from '@/config/enums/page.enum';
import { titleFont } from "@/config/fonts/fonts";

export const Footer = () => {
   return (
      <div className="flex w-full justify-center text-xs m-10">
         <Link href={Page.Home}>
            <span className={` ${ titleFont.className} antialiased font-bold`}>Teslo </span>
            <span>| Shop</span>
            <span>&copy; { new Date().getFullYear()}</span>
         </Link>

         <Link 
            href={Page.Home}
            className="mx-3"
         >Privacidad & Legal</Link>

         <Link 
            href={Page.Home}
            className="mx-3"
         >Ubicaciones</Link>
      </div>
   )
}

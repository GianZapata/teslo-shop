"use client"

import Link from "next/link"
import { IoSearchOutline, IoCartOutline }from 'react-icons/io5'
import { Page, titleFont } from "@/config"
import { Category, useUIStore } from "@/features"

export const TopMenu = () => {

   const openMenu = useUIStore( state => state.openSideMenu )

   return (
      <nav className="flex px-5 justify-between items-center w-full">
         
         {/* Logo */}

         <div>
            <Link href={Page.Home}>
               <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span> | Shop
            </Link>
         </div>

         <div className="hidden sm:block">
            <Link 
               className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
               href={`${Page.Category}/${Category.Men}`}
            >Hombres</Link>
            <Link 
               className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
               href={`${Page.Category}/${Category.Women}`}
            >Mujeres</Link>
            <Link 
               className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
               href={`${Page.Category}/${Category.Kids}`}
            >Niños</Link>
         </div>

         <div className="flex items-center gap-3">
            <Link href={Page.Search}>
               <IoSearchOutline className="w-5 h-5"/>
            </Link>
            <Link href={Page.Cart}>
               <div className="relative">
                  <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
               </div>
               <IoCartOutline className="w-5 h-5"/>
            </Link>
         </div>

         <button
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            onClick={ openMenu }
         >Menú</button>

      </nav>
   )
}

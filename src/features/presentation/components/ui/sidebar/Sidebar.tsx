"use client"

import clsx from "clsx"
import Link from "next/link"

import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline, IoApps  } from "react-icons/io5"

import { Page } from "@/config/enums/page.enum"
import { useUIStore } from "@/features/presentation/store/ui/ui.store"

export const Sidebar = () => {

   const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen )
   const closeMenu = useUIStore( state => state.closeSideMenu )

   return (
      <div>

         {/* Background black */}
         { isSideMenuOpen && (
            <div
               className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
            />
         )}

         {/* Blur */}
         {
            isSideMenuOpen && (
               <div 
                  onClick={ closeMenu }
                  className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
               />
            )
         }

         <nav  
            className={ 
               clsx(
                  "fixed right-0 top-0 w-[250px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                  {
                     "translate-x-full": !isSideMenuOpen
                  }
               )
            }
         >
            <IoCloseOutline
               size={25}
               className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 cursor-pointer transition-all duration-300 "
               onClick={ () => closeMenu() }
            />

            <div className="relative mt-14 mb-3">
               <IoSearchOutline size={ 20 } className="absolute top-2 left-2" />
               <input type="text"
                  className="w-full bg-gray-50 rounded pl-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                  placeholder="Buscar"
               />
            </div>

            <Link href={Page.Home} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoPersonOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Perfil</span>
            </Link>

            <Link href={Page.Orders} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoTicketOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Ordenes</span>
            </Link>

            <Link href={Page.AuthLogin} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoLogInOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Ingresar</span>
            </Link>

            <Link href={Page.AuthLogin} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoLogOutOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Salir</span>
            </Link>

            <div className="w-full h-px bg-gray-200 my-3"/>

            <Link href={Page.Products} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoApps size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Dashboard</span>
            </Link>

            <Link href={Page.Products} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoShirtOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Products</span>
            </Link>

            <Link href={Page.Orders} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoTicketOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Ordenes</span>
            </Link>

            <Link href={Page.AdminUsers} className="flex items-center py-3 px-4 hover:bg-gray-50 rounded transition-all">
               <IoPeopleOutline size={25} className={'text-gray-700'} />
               <span className="ml-3 text-xl text-gray-700">Usuarios</span>
            </Link>

         </nav>

      </div>
   )
}

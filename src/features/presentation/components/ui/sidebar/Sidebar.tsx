'use client'

import { useUIStore } from "@/features"

export const Sidebar = () => {

   const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen )
   const closeMenu = useUIStore( state => state.closeSideMenu )

   return (
      <div>
         {
            isSideMenuOpen && 'Side menu Open'
         }
      </div>
   )
}

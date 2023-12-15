import { Page } from "@/config/enums/page.enum"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"

const EmptyPage = () => {
   return (
      <div className="flex flex-col md:flex-row justify-center items-center h-[calc(100vh_-_200px)]">
         <IoCartOutline size={100} className="mt-5"/>
         <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Tu carrito esta vació</h1>
            <Link href={Page.Home}
               className="text-3xl text-blue-600"
            >Regresar</Link>
         </div>
      </div>
   )
}

export default EmptyPage
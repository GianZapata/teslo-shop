import { TopMenu } from "@/features/presentation"
import { Sidebar } from "@/features/presentation/components/ui/sidebar/Sidebar"

const ShopLayout = ({
   children,
}: {
   children: React.ReactNode
}) => {
   return (
      <main className="min-h-screen">

         <TopMenu/>

         <Sidebar />

         <div className="px-0 md:px-10">
            { children }
         </div>

      </main>
   )
}

export default ShopLayout


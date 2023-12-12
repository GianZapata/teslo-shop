import { TopMenu, Sidebar } from "@/features"

const ShopLayout = ({
   children,
}: {
   children: React.ReactNode
}) => {
   return (
      <main className="min-h-screen">

         <TopMenu/>

         <Sidebar/>
         { children }

      </main>
   )
}

export default ShopLayout


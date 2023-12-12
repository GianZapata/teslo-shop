import { TopMenu } from "@/features"

const ShopLayout = ({
   children,
}: {
   children: React.ReactNode
}) => {
   return (
      <main className="min-h-screen">

         <TopMenu/>
         { children }

      </main>
   )
}

export default ShopLayout


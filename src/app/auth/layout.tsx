
const ShopLayout = ({
   children,
}: {
   children: React.ReactNode
}) => {
   return (
      <main className="flex justify-center">
         <div className="w-full md:max-w-md">
            { children }
         </div>
      </main>
   )
}

export default ShopLayout


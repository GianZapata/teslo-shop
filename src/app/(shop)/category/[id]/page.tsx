import { notFound } from "next/navigation"
import { FC } from "react"

interface CategoryPageProps {
   params: {
      id: string 
   }
}

const CategoryPage: FC<CategoryPageProps> = ({ params }) => {   

   const { id } = params

   if ( id === 'kids' ) notFound()


   return (
      <div>CategoryPage{id}</div>
   )
}

export default CategoryPage
import { initialData } from "@/config/seed"
import { ProductGrid, Title } from "@/features/presentation"

const products = initialData.products

const HomePage = () => {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2"/>

      <ProductGrid
        products={products}
      />
    </>
  )
}

export default HomePage
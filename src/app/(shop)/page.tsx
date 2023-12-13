import { initialData } from "@/config"
import { ProductGrid, Title } from "@/features"

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
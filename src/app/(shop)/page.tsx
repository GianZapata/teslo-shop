import { initialData } from "@/config/seed/seed"
import { ProductGrid } from "@/features/presentation/components/products/product-grid/ProductGrid"
import { Title } from "@/features/presentation/components/ui/title/Title"

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
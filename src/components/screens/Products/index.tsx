import { Product } from '@components/elements/product/Product'
import { products } from '@src/models/data'

export const Products = () => {
  return (
    <div className="products">
      <h2 className="page-header">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

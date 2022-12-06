import { Product } from '@components/elements/product/Product'
import products from 'public/assets/JsonData/products.json'

export const Products = () => {
  return (
    <div className="products">
      <h2 className="page-header">Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

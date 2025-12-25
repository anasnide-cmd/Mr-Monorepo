import { Button } from '@mr-monorepo/ui'

export default function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ]

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <Button>Add to Cart</Button>
          </li>
        ))}
      </ul>
    </main>
  )
}
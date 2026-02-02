const ProductList = async () => {
  const response = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
    next: {
      revalidate: 5, // Revalidate this data every 5 seconds
    },
  })
  const { products } = await response.json()
  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}

export default ProductList

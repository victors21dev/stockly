import { PlusIcon } from 'lucide-react'
import { Button } from '../_components/ui/button'
import { DataTable } from '../_components/ui/data-table'
import { productTableColumns } from './_components/table-columns'
import { getProducts } from '../_data-access/product/get-products'

const ProductsPage = async () => {
  const response = await fetch('http://localhost:3000/api/products', {
    method: 'GET',
    next: {
      revalidate: 5, // Revalidate this data every 5 seconds
    },
  })

  const { products, randomNumber } = await response.json()

  const { randomNumber: randomNumber2 } = await (
    await fetch('http://localhost:3000/api/number', {
      method: 'GET',
      // next: { revalidate: 5 },
      cache: 'no-store', // Disable caching to always get a fresh number
    })
  ).json()

  return (
    <div className="m-8 w-full space-y-8 rounded-md bg-white p-8">
      <div className="justify between flex w-full items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-medium">
            Random number from /products: {randomNumber}
          </h1>
          <h1 className="text-xl font-medium">
            Random number from /number: {randomNumber2}
          </h1>
          <span className="text-xs font-semibold text-slate-500">
            Gestão de produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  )
}

export default ProductsPage

import type { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { Products } from '../components/Products'

interface HomeProps {
  products: [{
    id: number,
    name: string,
    category: string,
    amount: string
  }]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Header />
      <Products products={products} />
    </>
  )
}

type Product = {
  id: number,
  name: string,
  category: string,
  amount: number
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}products`);
  const responseJson = await response.json();

  const products = responseJson.map((product: Product) => {
    let productFormatted = {
      id: product.id,
      name: product.name,
      category: product.category,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(product.amount)
    }

    return productFormatted;
  })

  return {
    props: {
      products
    },
  }
}
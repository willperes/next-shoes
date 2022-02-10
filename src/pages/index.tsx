import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Products } from '../components/Products'
import { api } from '../services/api'

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

  const response = await api.get('/products');

  const responseJson = response.data;

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
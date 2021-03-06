import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Products } from '../components/Products'

interface HomeProps {
  products: [{
    id: number,
    name: string,
    category: string,
    image: string,
    amount: number
  }]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | NextShoes</title>
      </Head>
      <Header selectedTab={'home'} />
      <Products products={products} />
    </>
  )
}

type Product = {
  id: number,
  name: string,
  category: string,
  image: string,
  amount: number
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}/products`);
  const products = await response.json();

  return {
    props: {
      products
    },
  }
}
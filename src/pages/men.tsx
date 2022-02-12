import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Products } from '../components/Products'

interface MenProps {
  products: [{
    id: number,
    name: string,
    category: string,
    image: string,
    amount: number
  }]
}

export default function Men({ products }: MenProps) {
  return (
    <>
      <Head>
        <title>Men's | NextShoes</title>
      </Head>
      <Header selectedTab={'men'} />
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
  const responseJson = await response.json();

  const products = responseJson.filter((product: Product) => {
      if (product.category === "Men's Shoes") return product;
  });

  return {
    props: {
      products
    },
  }
}
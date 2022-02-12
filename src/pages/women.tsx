import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Products } from '../components/Products'

interface WomenProps {
  products: [{
    id: number,
    name: string,
    category: string,
    image: string,
    amount: number
  }]
}

export default function Women({ products }: WomenProps) {
  return (
    <>
      <Head>
        <title>Women&apos;s | NextShoes</title>
      </Head>
      <Header selectedTab={'women'} />
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
      if (product.category === "Women\'s Shoes") return product;
  });

  return {
    props: {
      products
    },
  }
}
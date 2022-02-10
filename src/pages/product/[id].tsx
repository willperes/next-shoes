import { GetStaticPaths } from "next";
import Image from "next/image";
import { CustomButton } from "../../components/CustomButton";

import { Header } from "../../components/Header";
import { Wrapper, Main } from "./styles";

interface Product {
    id: number,
    name: string,
    category: string,
    amount: string
}

interface Params {
    params: {
        id: number
    }
}

interface ProductProps {
    product: Product
}

export default function Product({ product }: ProductProps) {
    return (
        <>
            <Header />
            <Main>
                <Wrapper>
                    <Image src="/images/shoe.jpg" height="600%" width="600%" />
                    <div className="content">
                        <h1>{product.name} {product.id}</h1>
                        <h2>{product.category}</h2>
                        <h3>{product.amount}</h3>
                        <CustomButton>Buy now</CustomButton>
                        <p>Your workhorse with wings returns. The Nike Lorem Ipsum has that extra bounce for long, short or everyday runs. It’s cool and breathable with a wider fit at the toes and plenty of cushioned support to help you fly past your personal goals. Bold colors nod to the world coming together to celebrate sport.</p>

                    </div>
                </Wrapper>
            </Main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.API_URL}/products`);
    const data = await res.json();

    const paths = data.map((product: Product) => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context: Params) => {
    const id = context.params.id;
    const res = await fetch(`${process.env.API_URL}/product/${id}`);
    const data = await res.json();

    let product = {
        id: data.id,
        name: data.name,
        category: data.category,
        amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(data.amount)
    }

    return {
        props: { product }
    }
}
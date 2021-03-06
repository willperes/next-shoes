import { GetStaticPaths } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { CustomButton } from "../../components/CustomButton";

import { Header } from "../../components/Header";
import { SizeSelection } from "../../components/SizeSelection";
import { useCart } from "../../hooks/useCart";
import { Wrapper, Main } from "../../styles/pages/product";

interface Product {
    id: number,
    name: string,
    category: string,
    image: string,
    amount: number
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
    const { addToCart, changeProductSize } = useCart();

    useEffect(() => {
        changeProductSize('');
    }, []);

    function handleClick() {
        addToCart(product);
    }

    return (
        <>
            <Head>
                <title>{product.name} | NextShoes</title>
            </Head>
            <Header />
            <Main>
                <Wrapper>
                    <img src={product.image} alt={product.name} />
                    <div className="content">
                        <h1>{product.name}</h1>
                        <h2>{product.category}</h2>
                        <h3>{new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(product.amount)}</h3>
                        <div className="size-selection">
                            <SizeSelection />
                        </div>
                        <CustomButton onClick={handleClick}>Buy now</CustomButton>
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
        fallback: false
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
        image: data.image,
        amount: data.amount
    }

    return {
        props: { product }
    }
}
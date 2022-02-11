import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container, Content, Product, RemoveItem } from "../../styles/pages/cart";

import IconButton from '@mui/material/IconButton';
import { MdDelete } from 'react-icons/md';
import { useCart } from "../../hooks/useCart";
import Head from "next/head";

interface Product {
    id: number,
    name: string,
    category: string,
    amount: string,
    size: number,
    quantity: number,
}

export default function Cart() {
    const [cost, setCost] = useState(0);
    const [isVisible, setVisibility] = useState<boolean>();
    const [products, setProducts] = useState<Product[]>([])

    const { removeFromCart } = useCart();

    function getKey(product: Product) {
        let idString = product.id.toString();
        let size = product.size.toString();
        const key = idString.concat(size);
        return key;
    }

    function handleClick(id: number, size: number) {
        removeFromCart(id, size);
        if (localStorage.hasOwnProperty('@NextShoes: Cart')) {
            let cart = JSON.parse(localStorage.getItem('@NextShoes: Cart') || '{}');
            if (cart.length === 0) {
                setVisibility(false);
                setCost(0);
                return;
            }
            setProducts(cart);
        } else {
            setVisibility(false);
        }
    }

    function updateCost() {
        let currentCost = 0;
        for (let product of products) {
            currentCost += Number(product.amount) * product.quantity;
        }
        setCost(currentCost);
    }

    useEffect(() => {
        if (localStorage.hasOwnProperty('@NextShoes: Cart')) {
            const cart = JSON.parse(localStorage.getItem('@NextShoes: Cart') || '{}');
            if (cart.length === 0) {
                setVisibility(false);
                return;
            } else {
                setProducts(cart);
                setVisibility(true);
            }
        }
    }, [])

    useEffect(() => {
        updateCost();
    }, [products])

    return (
        <>
            <Head>
                <title>Cart | NextShoes</title>
            </Head>
            <Header />
            <Container>
                {isVisible && (
                    products.map((product: Product) => (
                        <Product key={getKey(product)}>
                            <img src="/images/shoe.jpg" alt={product.name} />
                            <Content>
                                <h1>{product.name}</h1>
                                <h2>Size: <span>{product.size}</span></h2>
                                <h2>Quantity: <span>{product.quantity}</span></h2>
                                <h3>{product.amount}</h3>
                            </Content>
                            <RemoveItem>
                                <IconButton aria-label="delete" onClick={() => handleClick(product.id, product.size)} >
                                    <MdDelete />
                                </IconButton>
                            </RemoveItem>
                        </Product>
                    ))
                )}
                {!isVisible && (
                    <h1 className="empty-cart">Your cart is empty.</h1>
                )}
            </Container>
        </>
    );
}
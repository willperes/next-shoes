import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CustomButton } from "../../components/CustomButton";
import { Container, Content, Product, RemoveItem, Wrapper } from "../../styles/pages/cart";

import { useCart } from "../../hooks/useCart";

import IconButton from '@mui/material/IconButton';
import { MdDelete } from 'react-icons/md';

interface Product {
    id: number,
    name: string,
    category: string,
    image: string,
    amount: number,
    size: number,
    quantity: number,
}

export default function Cart() {
    const [cost, setCost] = useState('');
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
                setCost('');
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
            currentCost += product.amount * product.quantity;
        }
        setCost(new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(currentCost));
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
        updateCost();
    }, [])

    useEffect(() => {
        updateCost();
    }, [products])

    return (
        <>
            <Head>
                <title>Cart | NextShoes</title>
            </Head>
            <Container>
                {isVisible && (
                    <Wrapper>
                        {products.map((product: Product) => (
                            <Product key={getKey(product)}>
                                <Link href={`/product/${product.id}`}><img src={product.image} alt={product.name} /></Link>
                                <Content>
                                    <h1>{product.name}</h1>
                                    <h2>Size: <span>{product.size}</span></h2>
                                    <h2>Quantity: <span>{product.quantity}</span></h2>
                                    <h3>{new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(product.amount * product.quantity)}</h3>
                                </Content>
                                <RemoveItem>
                                    <IconButton aria-label="delete" onClick={() => handleClick(product.id, product.size)} >
                                        <MdDelete />
                                    </IconButton>
                                </RemoveItem>
                            </Product>
                        ))}
                        <section className="cart-checkout-section">
                            <h1>Cost: {cost}</h1>
                            <CustomButton>Checkout</CustomButton>
                            <div className="cart-payment-methods">
                                <img src="/images/mastercard-icon.svg" alt="MasterCard icon" />
                                <img src="/images/visa-icon.svg" alt="Visa icon" />
                                <img src="/images/googlepay-icon.svg" alt="GooglePay icon" />
                                <img src="/images/applepay-icon.svg" alt="ApplePay icon" />
                                <img src="/images/paypal-icon.svg" alt="PayPal icon" />
                                <img src="/images/amazon-icon.svg" alt="Amazon icon" />
                                <img src="/images/alipay-icon.svg" alt="AliPay icon" />
                            </div>
                        </section>
                    </Wrapper>
                )}
                {!isVisible && (
                    <section className="cart-empty">
                        <h1>Your cart is empty.</h1>
                    </section>
                )}
            </Container>
        </>
    );
}
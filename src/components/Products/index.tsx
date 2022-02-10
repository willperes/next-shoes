import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { Container, Content } from "./styles";

interface ProductsProps {
    products: [{
        id: number,
        name: string,
        category: string,
        amount: string
    }]
}

interface Product {
    id: number,
    name: string,
    category: string,
    amount: string
}

export function Products({ products }: ProductsProps) {
    return (
        <Container>
            <Content className="content">
                {products.map((product: Product) => (
                    <ProductCard product={product} key={product.id}/>
                ))}
            </Content>
        </Container>
    );
}
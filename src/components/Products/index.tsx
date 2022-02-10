import Link from "next/link";
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
                    <Link href={`/product/${product.id}`} key={product.id} passHref >
                        <div><ProductCard product={product}/></div>
                    </Link>
                ))}
            </Content>
        </Container>
    );
}
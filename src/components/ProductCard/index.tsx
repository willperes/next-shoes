import { Product } from "./styles";

interface ProductCardProps {
    product: {
        id: number,
        name: string,
        category: string,
        amount: string
    }
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Product>
            <header>
                <img src="/images/shoe.jpg" alt={product.name} />
            </header>
            <section className="body">
                <h1>{product.name} {product.id}</h1>
                <p>{product.category}</p>
                <span>{product.amount}</span>
            </section>
        </Product>
    );
}
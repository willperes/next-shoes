import { Product } from "./styles";

interface ProductCardProps {
    product: {
        id: number,
        name: string,
        category: string,
        image: string,
        amount: number
    }
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Product>
            <header>
                <img src={product.image} alt={product.name} />
            </header>
            <section className="body">
                <h1>{product.name}</h1>
                <p>{product.category}</p>
                <span>{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(product.amount)}</span>
            </section>
        </Product>
    );
}
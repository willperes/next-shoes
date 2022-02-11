import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

interface CartProviderProps {
    children: ReactNode;
}

interface Product {
    id: number,
    name: string,
    category: string,
    amount: string
}

interface CartContextData {
    changeProductSize: (size: number) => void;
    addToCart: (producT: Product) => void;
}

const CartContext = createContext<CartContextData>(
    {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps) {
    const [productSize, setProductSize] = useState(0);

    function addToCart(product: Product) {
        if (productSize === 0) {
            toast.error("You have to select a size before adding the product to the cart");
            return;
        }

        let cart = [];

        if (localStorage.hasOwnProperty('@NextShoes: Cart')) {
            cart = JSON.parse(localStorage.getItem('@NextShoes: Cart') || '{}');
        }

        const productFormatted = {
            id: product.id,
            name: product.name,
            category: product.category,
            amount: product.amount,
            size: productSize,
            quantity: 1
        }

        for (let i = 0; i < cart.length; i++) {
            let id = productFormatted.id;
            if (cart[i].id === id && cart[i].size === productFormatted.size) {
                cart[i].quantity = cart[i].quantity + 1;
                localStorage.setItem('@NextShoes: Cart', JSON.stringify(cart));
                toast.success("Product added to the cart");
                setProductSize(0);
                return;
            }
        }

        cart.push(productFormatted);
        localStorage.setItem('@NextShoes: Cart', JSON.stringify(cart));
        toast.success("Product added to the cart");
        setProductSize(0);
    }

    function changeProductSize(size: number) {
        setProductSize(size)
    }

    return (
        <CartContext.Provider value={{ changeProductSize, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}
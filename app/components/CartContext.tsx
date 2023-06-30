'use client';
import { createContext, useState, Dispatch, SetStateAction } from 'react';

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    setCartProducts: () => {},
    addProduct: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<string[]>([]);

    const addProduct = (productId: string) => {
        setCartProducts((prev) => [...prev, productId]);
    };

    return (
        <CartContext.Provider
            value={{ cartProducts, setCartProducts, addProduct }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

interface ICartContext {
    cartProducts: string[];
    setCartProducts: Dispatch<SetStateAction<string[]>>;
    addProduct: (productId: string) => void;
}

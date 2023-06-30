'use client';
import { createContext, useState, Dispatch, SetStateAction } from 'react';

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    setCartProducts: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<string[]>([]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

interface ICartContext {
    cartProducts: string[];
    setCartProducts: Dispatch<SetStateAction<string[]>>;
}

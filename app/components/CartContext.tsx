'use client';
import {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useEffect,
} from 'react';

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    setCartProducts: () => {},
    addProduct: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const ls: Storage | null =
        typeof window !== 'undefined' ? window.localStorage : null;
    const [cartProducts, setCartProducts] = useState<string[]>([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart') || ''));
        }
    }, []);

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

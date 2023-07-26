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
    removeProduct: () => {},
    clearCart: () => {},
});

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const ls: Storage | null =
        typeof window !== 'undefined' ? window.localStorage : null;
    const [cartProducts, setCartProducts] = useState<string[]>([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        } else {
            ls?.removeItem('cart');
        }
    }, [cartProducts, ls]);

    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart') || ''));
        }
    }, []);

    const addProduct = (productId: string) => {
        setCartProducts((prev) => [...prev, productId]);
    };

    const removeProduct = (productId: string) => {
        setCartProducts((prev) => {
            const pos = prev.indexOf(productId);
            console.log(pos);
            if (pos !== -1) {
                return prev.filter((value, index) => index !== pos);
            }
            return prev;
        });
    };

    const clearCart = () => {
        setCartProducts([]);
        ls?.clear();
    };

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                setCartProducts,
                addProduct,
                removeProduct,
                clearCart,
            }}
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
    removeProduct: (productId: string) => void;
    clearCart: () => void;
}

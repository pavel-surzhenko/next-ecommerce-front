'use client';
import { styled } from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/CartContext';
import axios from 'axios';
import { IProduct } from '../page';

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    margin-top: 40px;
`;
const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
`;
const CartPage = () => {
    const { cartProducts } = useContext(CartContext);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts }).then((response) => {
                setProducts(response.data);
            });
        }
    }, [cartProducts]);

    return (
        <>
            <Header />
            <Container>
                <ColumnsWrapper>
                    <Box>
                        {!cartProducts?.length && <div>Your cart is empty</div>}
                        {products?.length > 0 && (
                            <>
                                <h2>Cart</h2>
                                {products.map((product) => (
                                    <div key={product._id}>{product.title}</div>
                                ))}
                            </>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>Order Information</h2>
                            <input
                                type='text'
                                placeholder='Address'
                            />
                            <input
                                type='text'
                                placeholder='Address 2'
                            />
                            <Button
                                block='true'
                                black='true'
                            >
                                Continue to payment
                            </Button>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Container>
        </>
    );
};
export default CartPage;

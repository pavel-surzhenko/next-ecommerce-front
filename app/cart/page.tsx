'use client';
import { styled } from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/CartContext';
import axios from 'axios';
import { IProduct } from '../page';
import Table from '../components/Table';
import Image from 'next/image';

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
const ProductInfoCell = styled.td`
    padding: 10px 0;
`;
const ProductImageBox = styled.div`
    width: 70px;
    height: 100px;
    padding: 2px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 60px;
        max-height: 60px;
    }
    @media screen and (min-width: 768px) {
        padding: 10px;
        width: 100px;
        height: 100px;
        img {
            max-width: 80px;
            max-height: 80px;
        }
    }
`;

const QuantityLabel = styled.span`
    padding: 0 3px;
`;

const CartPage = () => {
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts }).then((response) => {
                setProducts(response.data);
            });
        }
    }, [cartProducts]);

    const moreOfThisProduct = (id: string) => {
        addProduct(id);
    };

    const lessOfThisProduct = (id: string) => {
        removeProduct(id);
    };

    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find((p) => p._id === productId)?.price || 0;
        total += price;
    }

    return (
        <>
            <Header />
            <Container>
                <ColumnsWrapper>
                    <Box>
                        <h2>Cart</h2>
                        {!cartProducts?.length && <div>Your cart is empty</div>}
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product._id}>
                                            <ProductInfoCell>
                                                <ProductImageBox>
                                                    <Image
                                                        src={product.images[0]}
                                                        alt={product.title}
                                                        width={150}
                                                        height={150}
                                                    />
                                                </ProductImageBox>
                                                {product.title}
                                            </ProductInfoCell>
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        lessOfThisProduct(
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    -
                                                </Button>
                                                <QuantityLabel>
                                                    {
                                                        cartProducts.filter(
                                                            (id) =>
                                                                id ===
                                                                product._id
                                                        ).length
                                                    }
                                                </QuantityLabel>
                                                <Button
                                                    onClick={() =>
                                                        moreOfThisProduct(
                                                            product._id
                                                        )
                                                    }
                                                >
                                                    +
                                                </Button>
                                            </td>
                                            <td>
                                                $
                                                {cartProducts.filter(
                                                    (id) => id === product._id
                                                ).length * product.price}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>${total}</td>
                                    </tr>
                                </tbody>
                            </Table>
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

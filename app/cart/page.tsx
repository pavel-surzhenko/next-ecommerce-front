'use client';
import { styled } from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { CartContext } from '../components/CartContext';
import axios from 'axios';
import { IProduct } from '../page';
import Table from '../components/Table';
import Image from 'next/image';
import Input from '../components/Input';

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
    /* display: inline-block;
    width: 20px;
    text-align: center; */
`;

const PriceLabel = styled.span`
    /* padding: 0 3px;
    min-width: 80px;
    display: inline-block; */
`;

const CityHolder = styled.div`
    display: flex;
    gap: 5px;
`;
const CartPage = () => {
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts }).then((response) => {
                setProducts(response.data);
            });
        } else {
            setProducts([]);
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
                                                <PriceLabel>
                                                    $
                                                    {cartProducts.filter(
                                                        (id) =>
                                                            id === product._id
                                                    ).length * product.price}
                                                </PriceLabel>
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
                            <form
                                method='post'
                                action='/api/checkout'
                            >
                                <Input
                                    type='text'
                                    placeholder='Name'
                                    value={name}
                                    name='name'
                                    onChange={(
                                        ev: ChangeEvent<HTMLInputElement>
                                    ) => setName(ev.target.value)}
                                />
                                <Input
                                    type='text'
                                    placeholder='Email'
                                    value={email}
                                    name='email'
                                    onChange={(
                                        ev: ChangeEvent<HTMLInputElement>
                                    ) => setEmail(ev.target.value)}
                                />
                                <CityHolder>
                                    <Input
                                        type='text'
                                        placeholder='City'
                                        value={city}
                                        name='city'
                                        onChange={(
                                            ev: ChangeEvent<HTMLInputElement>
                                        ) => setCity(ev.target.value)}
                                    />
                                    <Input
                                        type='text'
                                        placeholder='Postal code'
                                        value={postalCode}
                                        name='postalCode'
                                        onChange={(
                                            ev: ChangeEvent<HTMLInputElement>
                                        ) => setPostalCode(ev.target.value)}
                                    />
                                </CityHolder>
                                <Input
                                    type='text'
                                    placeholder='Street address'
                                    value={streetAddress}
                                    name='streetAddress'
                                    onChange={(
                                        ev: ChangeEvent<HTMLInputElement>
                                    ) => setStreetAddress(ev.target.value)}
                                />
                                <Input
                                    type='text'
                                    placeholder='Country'
                                    value={country}
                                    name='country'
                                    onChange={(
                                        ev: ChangeEvent<HTMLInputElement>
                                    ) => setCountry(ev.target.value)}
                                />
                                <Button
                                    block='true'
                                    black='true'
                                    type='submit'
                                >
                                    Continue to payment
                                </Button>
                            </form>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Container>
        </>
    );
};
export default CartPage;

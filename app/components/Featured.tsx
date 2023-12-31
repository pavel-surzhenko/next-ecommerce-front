'use client';
import { styled } from 'styled-components';
import Container from './Container';
import Image from 'next/image';
import Button from './Button';
import { IProduct } from '../page';
import ButtonLink from './ButtonLink';
import CartIcon from './icons/CartIcon';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`;
const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;
    img {
        max-width: 100%;
        max-height: 200px;
    }
    div:nth-child(1) {
        order: 2;
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: 1.2fr 0.8fr;
        div:nth-child(1) {
            order: 0;
        }
        img {
            max-width: 100%;
            max-height: 250px;
        }
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

const Featured = ({ featuredProduct }: { featuredProduct: IProduct }) => {
    const { addProduct } = useContext(CartContext);

    const addFeatureToCart = () => {
        addProduct(featuredProduct._id);
    };

    return (
        <Bg>
            <Container>
                <ColumnsWrapper>
                    <div>
                        <Title>{featuredProduct?.title}</Title>
                        <Desc>{featuredProduct?.description}</Desc>
                        <ButtonWrapper>
                            <ButtonLink
                                href={'/product/' + featuredProduct?._id}
                                white='true'
                                outline='true'
                            >
                                Read more
                            </ButtonLink>
                            <Button
                                onClick={addFeatureToCart}
                                white='true'
                            >
                                <CartIcon />
                                Add to cart
                            </Button>
                        </ButtonWrapper>
                    </div>
                    <div>
                        <Image
                            src='https://pavlo-next-ecommerce.s3.eu-north-1.amazonaws.com/1687265005566-removebg-preview.png'
                            alt='iphone'
                            width={1100}
                            height={1100}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </ColumnsWrapper>
            </Container>
        </Bg>
    );
};

export default Featured;

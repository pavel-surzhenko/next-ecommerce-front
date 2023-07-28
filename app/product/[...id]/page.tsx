'use client';
import Button from '@/app/components/Button';
import { CartContext } from '@/app/components/CartContext';
import Container from '@/app/components/Container';
import { ProductImages } from '@/app/components/ProductImages';
import { Spinner } from '@/app/components/Spinner';
import { Title } from '@/app/components/Title';
import { WhiteBox } from '@/app/components/WhiteBox';
import CartIcon from '@/app/components/icons/CartIcon';
import { IProduct } from '@/app/page';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const ColWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Price = styled.span`
    font-size: 1.4rem;
`;
const ProductPage = ({ params }: { params: { id: string[] } }) => {
    const id = params.id.join('');
    const [productInfo, setProductInfo] = useState<IProduct>();
    const [isFetch, setIsFetch] = useState<boolean>(false);
    const { addProduct } = useContext(CartContext);

    useEffect(() => {
        axios.get('/api/products?id=' + id).then((response) => {
            setProductInfo(response.data);
            setIsFetch(true);
        });
    }, [id]);

    return (
        <Container>
            {!isFetch ? (
                <Spinner />
            ) : (
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages {...productInfo!} />
                    </WhiteBox>
                    <div>
                        <Title>{productInfo?.title}</Title>
                        <p>{productInfo?.description}</p>
                        <PriceRow>
                            <div>
                                <Price>${productInfo?.price}</Price>
                            </div>
                            <div>
                                <Button
                                    primary='true'
                                    onClick={() =>
                                        addProduct(productInfo?._id!)
                                    }
                                >
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </div>
                        </PriceRow>
                    </div>
                </ColWrapper>
            )}
        </Container>
    );
};
export default ProductPage;

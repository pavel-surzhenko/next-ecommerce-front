'use client';
import Button from '@/app/components/Button';
import { CartContext } from '@/app/components/CartContext';
import Container from '@/app/components/Container';
import { ProductImages } from '@/app/components/ProductImages';
import { Spinner } from '@/app/components/Spinner';
import { Title } from '@/app/components/Title';
import { WhiteBox } from '@/app/components/WhiteBox';
import ArrowIcon from '@/app/components/icons/ArrowIcon';
import CartIcon from '@/app/components/icons/CartIcon';
import { IProduct } from '@/app/page';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 20px 0;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: start;
        margin: 40px 0;
    }
`;

const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

const Price = styled.span`
    font-size: 1.4rem;
`;

const BackButton = styled.div`
    align-self: start;
    margin-bottom: -40px;
    svg {
        margin-right: 0px;
    }
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const ProductPage = ({ params }: { params: { id: string[] } }) => {
    const id = params.id.join('');
    const [productInfo, setProductInfo] = useState<IProduct>();
    const [isFetch, setIsFetch] = useState<boolean>(false);
    const { addProduct } = useContext(CartContext);
    const router = useRouter();

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
                    <BackButton>
                        <Button
                            outline='true'
                            black='true'
                            onClick={() => router.push('/products')}
                        >
                            <ArrowIcon />
                        </Button>
                    </BackButton>
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

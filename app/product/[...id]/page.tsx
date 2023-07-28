'use client';
import mongooseConnect from '@/app/_lib/mongoose';
import { Product } from '@/app/_models/Product';
import Container from '@/app/components/Container';
import { ProductImages } from '@/app/components/ProductImages';
import { Spinner } from '@/app/components/Spinner';
import { Title } from '@/app/components/Title';
import { WhiteBox } from '@/app/components/WhiteBox';
import { IProduct } from '@/app/page';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    margin-top: 40px;
`;
const ProductPage = ({ params }: { params: { id: string[] } }) => {
    const id = params.id.join('');
    const [productInfo, setProductInfo] = useState<IProduct>();
    const [isFetch, setIsFetch] = useState<boolean>(false);

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
                    </div>
                </ColWrapper>
            )}
        </Container>
    );
};
export default ProductPage;

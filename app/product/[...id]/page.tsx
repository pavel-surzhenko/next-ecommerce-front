'use client';
import mongooseConnect from '@/app/_lib/mongoose';
import { Product } from '@/app/_models/Product';
import Container from '@/app/components/Container';
import { Title } from '@/app/components/Title';
import { IProduct } from '@/app/page';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductPage = ({ params }: { params: { id: string[] } }) => {
    const id = params.id.join('');
    const [productInfo, setProductInfo] = useState<IProduct>();

    useEffect(() => {
        axios.get('/api/products?id=' + id).then((response) => {
            setProductInfo(response.data);
        });
    }, [id]);

    return (
        <Container>
            <Title>{productInfo?.title}</Title>
        </Container>
    );
};
export default ProductPage;

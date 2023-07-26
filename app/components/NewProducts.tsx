'use client';
import { styled } from 'styled-components';
import { IProduct } from '../page';
import Container from './Container';
import ProductBox from './ProductBox';
import { ProductsGrid } from './ProductsGrid';

const Title = styled.h2`
    font-size: 1.8rem;
    margin: 30px 0 20px;
    font-weight: 500;
`;

const NewProducts = ({ products }: { products: IProduct[] }) => {
    return (
        <Container>
            <Title>New Arrivals</Title>
            <ProductsGrid products={products} />
        </Container>
    );
};
export default NewProducts;

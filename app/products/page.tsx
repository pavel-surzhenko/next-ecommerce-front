'use client';
import { styled } from 'styled-components';
import Container from '../components/Container';
import { IProduct } from '../page';
import { ProductsGrid } from '../components/ProductsGrid';

const Title = styled.h1`
    font-size: 1.5em;
`;

const Products: React.FC<ProductsProps> = ({ products }) => {
    return (
        <Container>
            <Title>Products</Title>
            <ProductsGrid products={products} />
        </Container>
    );
};
export default Products;

interface ProductsProps {
    products: IProduct[];
}

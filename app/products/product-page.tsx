'use client';
import Container from '../components/Container';
import { ProductsGrid } from '../components/ProductsGrid';
import { Title } from '../components/Title';
import { IProduct } from '../page';

const ProductPage = ({ products }: ProductsProps) => {
    return (
        <Container>
            <Title>Products</Title>
            <ProductsGrid products={products} />
        </Container>
    );
};
export default ProductPage;

export interface ProductsProps {
    products: IProduct[];
}

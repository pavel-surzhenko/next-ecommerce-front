'use client';
import Container from '../components/Container';
import { IProduct } from '../page';
import { ProductsGrid } from '../components/ProductsGrid';
import { Title } from '../components/Title';

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

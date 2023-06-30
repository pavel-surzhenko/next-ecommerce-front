'use client';
import { styled } from 'styled-components';
import { IProduct } from '../page';
import Container from './Container';
import ProductBox from './ProductBox';

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 20px;
`;

const NewProducts = ({ products }: { products: IProduct[] }) => {
    return (
        <Container>
            <ProductsGrid>
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductBox
                            key={product._id}
                            {...product}
                        />
                    ))}
            </ProductsGrid>
        </Container>
    );
};
export default NewProducts;

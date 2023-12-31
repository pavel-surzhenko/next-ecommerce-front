import styled from 'styled-components';
import { IProduct } from '../page';
import ProductBox from './ProductBox';

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    gap: 20px;
    margin-bottom: 20px;
`;

export const ProductsGrid = ({ products }: { products: IProduct[] }) => {
    return (
        <StyledProductsGrid>
            {products.length > 0 &&
                products.map((product) => (
                    <ProductBox
                        key={product._id}
                        {...product}
                    />
                ))}{' '}
        </StyledProductsGrid>
    );
};

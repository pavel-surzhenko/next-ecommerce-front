import { styled } from 'styled-components';
import { IProduct } from '../page';
import Image from 'next/image';
import Button from './Button';
import CartIcon from './icons/CartIcon';
import Link from 'next/link';

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img {
        max-width: 100%;
        max-height: 80px;
        object-fit: contain;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: 0.8rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;

const PriceRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
`;

const Price = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
`;

const ProductInfoBox = styled.div`
    padding-top: 5px;
`;

const ProductBox = ({ _id, title, description, price, images }: IProduct) => {
    const url = '/product/' + _id;

    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <Image
                        src={images[0]}
                        width={300}
                        height={300}
                        alt={_id}
                    />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>${price}</Price>
                    <Button primary='true'>
                        <CartIcon />
                    </Button>
                </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
};
export default ProductBox;

import { styled } from 'styled-components';
import { IProduct } from '../page';
import Image from 'next/image';
import Button from './Button';
import CartIcon from './icons/CartIcon';

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
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

const Title = styled.h2`
    text-align: center;
    font-weight: normal;
    font-size: 0.9rem;
    margin: 0;
`;

const ProductBox = ({ _id, title, description, price, images }: IProduct) => {
    return (
        <ProductWrapper>
            <WhiteBox>
                <div>
                    <Image
                        src={images[0]}
                        width={300}
                        height={300}
                        alt={_id}
                    />
                </div>
            </WhiteBox>
            <Title>{title}</Title>
            <Button primary='true'>
                <CartIcon />
            </Button>
        </ProductWrapper>
    );
};
export default ProductBox;

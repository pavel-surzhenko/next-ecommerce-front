import Image from 'next/image';
import { IProduct } from '../page';
import { styled } from 'styled-components';

const ImageButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ProductImages = (productInfo: IProduct) => {
    const ImageButtons = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
    `;

    const ImageButton = styled.div`
        border: 1px solid #aaa;
        padding: 5px;
    `;

    return (
        <>
            <Image
                src={productInfo?.images[0]!}
                width={1000}
                height={1000}
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                }}
                alt={productInfo?._id!}
            />
            <ImageButtons>
                {productInfo.images.map((image) => (
                    <ImageButton key={image}>
                        <Image
                            src={image}
                            width={1000}
                            height={1000}
                            style={{
                                width: '100px',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                            alt={productInfo.title}
                        />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
};

import Image from 'next/image';
import { IProduct } from '../page';
import { styled } from 'styled-components';
import { HTMLAttributes, useState } from 'react';

const ImageButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    margin-top: 10px;
`;

const ImageButton = styled.div<ImageButtonProps>`
    border: 2px solid ${(props) => (props.$active ? '#ccc' : 'transparent')};
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
`;

export const ProductImages = (productInfo: IProduct) => {
    const [activeImg, setActiveImg] = useState(productInfo.images[0]);

    return (
        <>
            <Image
                priority
                src={activeImg}
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
                    <ImageButton
                        key={image}
                        onClick={() => setActiveImg(image)}
                        $active={image === activeImg}
                    >
                        <Image
                            src={image}
                            width={1000}
                            height={1000}
                            style={{
                                width: '70px',
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

interface ImageButtonProps extends HTMLAttributes<HTMLDivElement> {
    $active?: boolean;
}

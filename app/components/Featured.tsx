'use client';
import { styled } from 'styled-components';
import Container from './Container';
import Image from 'next/image';
import Button from './Button';

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;
const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
    align-items: center;
    img {
        max-width: 100%;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

const Featured = () => {
    return (
        <Bg>
            <Container>
                <ColumnsWrapper>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Numquam, ad error! Suscipit, tempora dolor
                            beatae deleniti sed reiciendis quod nam, delectus
                            accusamus consectetur magnam nesciunt cupiditate
                            exercitationem et nulla ex.
                        </Desc>
                        <ButtonWrapper>
                            <Button>Read more</Button>
                            <Button primary='true'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                    className='w-5 h-5'
                                >
                                    <path d='M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                                </svg>
                                Add to cart
                            </Button>
                        </ButtonWrapper>
                    </div>
                    <div>
                        <Image
                            src='https://pavlo-next-ecommerce.s3.eu-north-1.amazonaws.com/1687265005566-removebg-preview.png'
                            alt='iphone'
                            width={1100}
                            height={1100}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </ColumnsWrapper>
            </Container>
        </Bg>
    );
};

export default Featured;

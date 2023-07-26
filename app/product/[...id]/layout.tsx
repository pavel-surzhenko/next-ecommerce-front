import Header from '@/app/components/Header';

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
export default ProductLayout;

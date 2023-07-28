import Header from '@/app/components/Header';

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
export default CategoriesLayout;

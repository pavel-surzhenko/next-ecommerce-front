import Header from '@/app/components/Header';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
export default AccountLayout;

import mongooseConnect from './_lib/mongoose';
import { Product } from './_models/Product';
import CartContextProvider from './components/CartContext';
import Featured from './components/Featured';
import Header from './components/Header';
import NewProducts from './components/NewProducts';

const getProduct = async () => {
    const featuredProductId = '64919f2e990e0455b6a2b901';
    await mongooseConnect();
    const featuredProduct: IProduct | null = await Product.findById<IProduct>(
        featuredProductId
    );

    const newProducts = await Product.find({}, null, {
        sort: { _id: -1 },
        limit: 10,
    });

    return { featuredProduct, newProducts };
};

const HomePage = async () => {
    const { featuredProduct, newProducts } = JSON.parse(
        JSON.stringify(await getProduct())
    );

    return (
        <CartContextProvider>
            <Header />
            <Featured featuredProduct={featuredProduct} />
            <NewProducts products={newProducts} />
        </CartContextProvider>
    );
};
export default HomePage;

export interface IProduct {
    category: string;
    images: string[];
    price: number;
    description: string;
    title: string;
    _id: string;
}

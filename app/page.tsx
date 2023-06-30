import mongooseConnect from './_lib/mongoose';
import { Product } from './_models/Product';
import Featured from './components/Featured';
import Header from './components/Header';

const getProduct = async () => {
    const featuredProductId = '64919f2e990e0455b6a2b901';
    await mongooseConnect();
    const product: IProduct | null = await Product.findById<IProduct>(
        featuredProductId
    );

    return product;
};

const HomePage = async () => {
    const product = JSON.parse(JSON.stringify(await getProduct()));

    return (
        <div>
            <Header />
            <Featured product={product} />
        </div>
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

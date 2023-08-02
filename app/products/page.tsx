import mongooseConnect from '../_lib/mongoose';
import { Product } from '../_models/Product';
import Header from '../components/Header';
import { IProduct } from '../page';
import ProductPage from './product-page';

export const revalidate = 2;

const getProduct = async () => {
    await mongooseConnect();
    const products: IProduct[] = await Product.find({}, null, {
        sort: { _id: -1 },
    });

    return products;
};

const Products = async () => {
    const products: IProduct[] = JSON.parse(JSON.stringify(await getProduct()));

    return (
        <>
            <Header />
            <ProductPage products={products} />
        </>
    );
};
export default Products;

import Header from '../components/Header';
import mongooseConnect from '../_lib/mongoose';
import { Product } from '../_models/Product';
import Products from './page';
import { IProduct } from '../page';

const ProductsLayout = async () => {
    const products: IProduct[] = await getProduct();

    return (
        <>
            <Header />
            <Products products={products} />
        </>
    );
};
export default ProductsLayout;

const getProduct = async () => {
    await mongooseConnect();
    const products: IProduct[] = await Product.find({}, null, {
        sort: { _id: -1 },
    });

    return products;
};

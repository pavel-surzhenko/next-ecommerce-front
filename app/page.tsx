import mongooseConnect from './_lib/mongoose';
import { Product } from './_models/Product';
import Featured from './components/Featured';
import Header from './components/Header';

const HomePage = async () => {
    const featuredProductId = '64919f2e990e0455b6a2b901';
    await mongooseConnect();
    const product = await Product.findById(featuredProductId);
    console.log('🚀 ~ file: page.tsx:10 ~ HomePage ~ product:', product);

    return (
        <div>
            <Header />
            <Featured />
        </div>
    );
};
export default HomePage;

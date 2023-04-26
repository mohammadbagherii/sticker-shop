import { Helmet } from "react-helmet";
import MainLayout from "./components/layouts/MainLayout";
import Header from "./components/Header";
import { useSelector } from 'react-redux';
import PaginateItems from './components/common/PaginateItems';


function App() {
    // const { items: products, status } = useSelector((state) => state.products);

    return (
        <MainLayout>
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>

            <div className="mx-auto max-w-6xl">
                <Header />
                <PaginateItems
                    productsPerPage={6}
                />
            </div>
        </MainLayout>
    );
}

export default App;

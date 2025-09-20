import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import MainLayout from '../Layouts/MainLayout';
import Shop from '../pages/Shop';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='shop' element={<Shop/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
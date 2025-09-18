import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import MainLayout from '../Layouts/MainLayout';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'product'} element={<Product/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
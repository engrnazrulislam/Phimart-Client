import { Navigate, Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import MainLayout from '../Layouts/MainLayout';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import ActivateAccount from '../components/Registration/ActivateAccount';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='shop' element={<Shop/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path="register" element={<Register />} />
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                <Route path="dashboard" element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
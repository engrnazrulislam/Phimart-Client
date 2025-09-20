import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import ProductItem from './ProductItem';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ErrorAlert from '../components/ErrorAlert';
import api_clients from '../services/api_clients';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(()=>{
        setLoading(true)
        api_clients.get("/products/")
        .then((res)=>setProducts(res.data.results))
        .catch((error)=> setError(error))
        .finally(()=> setLoading(false));
    },[]);
    return (
        <section className=" bg-gray-50">
            <div className="py-12 px-4 max-w-7xl mx-auto">
                <div className='flex justify-between items-center px-4 md:px-8 mb-4'>
                    <h1 className="text-3xl md:text-4xl font-bold">Trending Product</h1>
                    <a href="" className="btn btn-secondary px-6 py-6 rounded-full">View All</a>
                </div>
            {/* Loading Spinner */}
            {
                isLoading && (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-spinner loading-xl text-secondary"></span>
                    </div>
                )
            }
            {
                error && (
                    <ErrorAlert error={error}/>
                )
            }
            {/* Product Slider */}
                {!isLoading && !error && products.length > 0 && (
                    <Swiper modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        className="container mt-4 px-4"
                        breakpoints={{
                            640: {slidesPerView:2},
                            1024: {slidesPerView:3},
                        }}
                    >
                        {products.map((product)=>(
                        <SwiperSlide key={product.id} className="flex justify-center">
                                <ProductItem product={product}/>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    )}
                    {!isLoading && !error && products.length === 0 && (
                        <p className="text-2xl text-red-600 font-bold text-center">No Product is Found</p>
                    )}
            </div>
        </section>
    );
};

export default Product;
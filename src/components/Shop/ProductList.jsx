import React from 'react';
import ProductItem from '../../pages/ProductItem';
import ErrorAlert from '../ErrorAlert';

const ProductList = ({products, loading, error}) => {
    if(loading && !error){
        return(
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-xl text-secondary"></span>
            </div>
        )
    }else if(!loading && error){
        return(
            <ErrorAlert error={error}/>
        )
    };
    return (
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16 py-16 bg-gray-50">
            {
                products.map((product)=>(
                    <ProductItem product={product} key={product.id}/>
                ))
            }
        </section>
    );
};

export default ProductList;
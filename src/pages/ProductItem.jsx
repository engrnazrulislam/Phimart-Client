import React from 'react';
import defaultImg from '../assets/single-post.jpg';
import { Link } from 'react-router';
const ProductItem = ({product}) => {
    return (
        <Link to = {`/shop/${product.id}/`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={product.images.length > 0 ? product.images[0].image:defaultImg}
                    alt="Shoes"
                    className="rounded-xl w-64 h-32" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <h3 className="text-xl text-red-700 font-bold">${product.price}</h3>
                    <div className="card-actions mt-1">
                    <button className="btn btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
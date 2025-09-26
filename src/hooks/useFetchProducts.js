import { useEffect, useState } from "react";
import api_clients from "../services/api_clients";
const useFetchProduct = (currentPage, priceRange, selectedCategory,searchQuery,sortOrder)=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [totalPages, setTotalPages] = useState(0);
        useEffect(()=>{
         const fetchProducts = async() => {
                setLoading(true);
                const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
                try{
                    const res = await api_clients.get(url);
                    const data = await res.data;
                    setProducts(data.results);
                    setTotalPages(Math.ceil(data.count/data.results.length));
                }catch(error){
                    setError(error.message);
                }finally{
                    setLoading(false);
                };
            };
            fetchProducts();
        },[currentPage,priceRange,selectedCategory,searchQuery,sortOrder]);
        return {
            products,
            loading,
            error,
            totalPages,
        }
    };
    export default useFetchProduct;
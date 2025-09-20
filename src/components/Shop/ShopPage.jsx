import { useEffect, useState } from 'react';
import api_clients from '../../services/api_clients';
import ProductList from './ProductList';
import Pagination from './Pagination';
const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
        fetchProducts();
    },[currentPage]);
    //Way:01
    // const fetchProducts = ()=>{
    //     setLoading(true)
    //     api_clients.get(`/products/?page=${currentPage}`)
    //     .then((res)=>{
    //         setProducts(res.data.results);
    //         setTotalPages(Math.ceil(res.data.count/res.data.results.length));
    //     })
    //     .catch((error)=>setError(error))
    //     .finally(()=>setLoading(false))
    // };

    //Way:02
    const fetchProducts = async() => {
        setLoading(true);
        try{
            const res = await api_clients.get(`/products/?page=${currentPage}`);
            const data = await res.data;
            setProducts(data.results);
            setTotalPages(Math.ceil(data.count/data.results.length));
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        };
    };

    
    return (
       <section>
            <ProductList products={products} loading={loading} error={error}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
       </section>
    );
};

export default ShopPage;
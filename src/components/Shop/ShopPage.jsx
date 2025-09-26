import { useState } from 'react';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProduct from '../../hooks/useFetchProducts';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';
const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder,setSortOrder] = useState("");
    const {products, loading, error, totalPages} = useFetchProduct(
        currentPage, 
        priceRange,
        selectedCategory,
        searchQuery,
        sortOrder,
    );
    const categories = useFetchCategories();

    const handlePriceChange = (index, value) =>{
        setPriceRange((prev)=>{
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    };

    return (
       <section className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl merg">Shop Our Products</h1>
            <FilterSection 
                priceRange={priceRange} 
                handlePriceChange={handlePriceChange}
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange = {setSelectedCategory}
                searchQuery={searchQuery}
                handleSearchQuery={setSearchQuery}
                sortOrder={sortOrder}
                handleSorting={setSortOrder}
            />
            <ProductList products={products} loading={loading} error={error}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
       </section>
    );
};

export default ShopPage;
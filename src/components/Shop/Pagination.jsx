import React from 'react';

const Pagination = ({totalPages, currentPage, handlePageChange}) => {
    return (
        <div className="flex justify-center gap-2 my-4">
            {Array.from({length:totalPages},(_,i)=>(
                <button key={i} onClick={()=>handlePageChange(i+1)} className={`${currentPage === i+1 ? "bg-secondary text-white": "bg-gray-200"} px-4 py-2 rounded-md shadow-md`}>{i+1}</button>
            ))}
        </div>
    );
};

export default Pagination;
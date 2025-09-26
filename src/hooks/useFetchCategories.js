import { useEffect, useState } from "react"
import api_clients from "../services/api_clients"

const useFetchCategories = () =>{
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        api_clients.get('/categories')
        .then(res=>setCategories(res.data))
    },[]);
  return categories;  
};
export default useFetchCategories;
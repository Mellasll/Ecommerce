import axios from 'axios'
import { useEffect, useState } from 'react'

const Main = () => {
    const [limit, setLimit] = useState()
    const [categories, setCategories] = useState()
    const [url, setUrl] = useState("https://fakestoreapi.com/products/")

    const Product = async () => {
        const res = await axios.get(url);
        setCategories(res.data.categories)
    }

    useEffect(()=>{
        Product()
        console.log(Product)

    },[url])

    return(
        <>

        </>
    )
}
export default Main
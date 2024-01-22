import React from "react";
import './home.scss';
import ProductCard from "../components/productCard";
import './product.scss'

function Product(){
    return(
        <>

        <div className="ExtraMargin"> {/*to provide the margin at the row of  first row of product view*/}
        <ProductCard/>
        </div>
        <ProductCard/>
           
        </>
    )
}

export default Product;
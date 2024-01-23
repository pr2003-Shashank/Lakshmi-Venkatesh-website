import React from "react";
import './home.scss';
import ProductCard from "../components/productCard";
import './product.scss'
import { Pagination } from "@mui/material";

function Product(){
    return(
        <>

        <div className="ExtraMargin"> {/*to provide the margin at the row of  first row of product view*/}
        <ProductCard/>
        </div>
        

        <Pagination count={10} variant="outlined" color="primary"  className="Pagination"/>
       
           
        </>
    )
}

export default Product;
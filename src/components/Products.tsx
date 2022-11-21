import React, {useEffect, useState} from "react"
import ReactPaginate from "react-paginate"

import ProductItem from "./ProductItem"

import {ProductItemType} from "../interfaces"

import "../styles/Products.css"

interface ProductsProps {
   displayedData: ProductItemType[]
   onAddToCart: (id: number) => void
}

const Products = ({onAddToCart, displayedData}: ProductsProps) => {
   const [products, setProducts] = useState<ProductItemType[] | null>(null)

   const productPerPage: number = 6
   let numberOfPages: number = Math.ceil(displayedData.length / productPerPage)

   const onNextPage = (page: any) => {
      let productsToShow: ProductItemType[] = []
      let min: number = page.selected * productPerPage
      let max: number = min + productPerPage
      productsToShow = displayedData.slice(min, max)
      setProducts(productsToShow)
   }

   useEffect(() => {
      onNextPage({selected: 0})
   }, [displayedData])

   return (<div className={"flex flex-col items-center"}>
      <div
         className={"inline-grid gap-4 grid-cols-3 grid-rows-2 md:grid-cols-1 md:grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 xl:grid-rows-2 xl:grid-cols-3"}
      >
         {products?.length ? (products.map((item) => (<ProductItem
            key={item.id}
            productItem={item}
            onAddToCart={onAddToCart}
         />))) : (<div className={"w-full flex justify-center my-4"}>
            <h3>No Products!</h3>
         </div>)}
      </div>
      {products?.length ? (<section
         className={"w-full h-[3rem] flex justify-center items-center mt-5"}
      >
         <ReactPaginate
            className={"flex items-center justify-center container bg-red-500 border"}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            previousClassName={"prev"}
            onPageChange={(page) => onNextPage(page)}
            pageRangeDisplayed={5}
            pageCount={numberOfPages}
            activeClassName={"active"}
            nextClassName={"next"}
            pageClassName={"pages"}
            disabledClassName={"disabled"}
         />
      </section>) : (<></>)}
   </div>)
}

export default Products

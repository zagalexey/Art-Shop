import React, { useEffect, useState } from "react"
import { data } from "../data/dummyData"
import ProductItem from "./ProductItem"
import { ProductItemType } from "../interfaces"
import ReactPaginate, { ReactPaginateProps } from "react-paginate"

import "../styles/Products.css"

interface ProductsProps {
    displayedData: ProductItemType[]
    onAddToCart: (id: number) => void
}

const Products = ({ onAddToCart, displayedData }: ProductsProps) => {
    const [products, setProducts] = useState<ProductItemType[] | null>(null)

    const productPerPage: number = 6
    let numberOfPages: number = Math.ceil(displayedData.length / productPerPage)

    const onNextPage = (page: any) => {
        let productsToShow: ProductItemType[] = []
        let min: number = page.selected * productPerPage
        let max: number = min + productPerPage
        productsToShow = displayedData.slice(min, max)
        console.log("Data: ", displayedData)
        console.log("Sliced data: ", productsToShow)
        setProducts(productsToShow)
    }

    useEffect(() => {
        onNextPage({ selected: 0 })
    }, [displayedData])

    return (
        <div className={"w-4/5 h-fit flex justify-center bg-green-500"}>
            <div className={"w-[90%]"}>
                <section className={"m-3 flex flex-row justify-between"}>
                    <div className={"flex items-center gap-5"}>
                        <h1 className={"text-2xl font-bold"}>Our Products</h1>
                        <p className={"text-[grey]"}>
                            {data.products.length} items
                        </p>
                    </div>
                    <p>Sorting</p>
                </section>
                <div className={"flex flex-wrap justify-between gap-4"}>
                    {products &&
                        products.map((item) => (
                            <ProductItem
                                key={item.id}
                                productItem={item}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                </div>
                <section className={"w-full h-[3rem] bg-amber-400"}>
                    <ReactPaginate
                        className={"flex justify-center items-center pages"}
                        breakLabel="..."
                        nextLabel="Next"
                        onPageChange={(page) => onNextPage(page)}
                        pageRangeDisplayed={5}
                        pageCount={numberOfPages}
                        previousLabel="Previous"
                        activeLinkClassName={"active_link"}
                        nextLinkClassName={"next"}
                    />
                </section>
            </div>
        </div>
    )
}

export default Products

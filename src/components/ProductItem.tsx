import React, {useState, memo} from "react"
import ProductLabel from "./ProductLabel"

import {ProductItemType} from "../interfaces"

interface ProductItemProps {
   productItem: ProductItemType
   onAddToCart: (id: number) => void
}

const ProductItem = memo(({productItem, onAddToCart}: ProductItemProps) => {
   const [onHoverState, setOnHoverState] = useState(false)

   return (<div
      className={"relative w-[350px] h-[300px] bg-blue-300 rounded-xl lg:w-[300px] lg:h-[250px] lg:w-[350px] lg:h    -[300px]"}
      onMouseOver={() => setOnHoverState(true)}
      onMouseLeave={() => setOnHoverState(false)}
   >
      <section
         className={"absolute top-2 right-2 flex flex-col items-center gap-2"}
      >
         {productItem.featured && <ProductLabel type={"featured"}/>}
         {productItem.bestseller && <ProductLabel type={"bestseller"}/>}
      </section>
      <img
         className={"w-full h-[75%] rounded-t-xl"}
         src={productItem.image.src}
         alt={productItem.image.alt}
      />
      <section className={"m-2 flex justify-between items-center"}>
         <section className={"flex flex-col"}>
            <h3 className={"font-bold"}>{productItem.name}</h3>
         </section>
      </section>
      <p className={"absolute right-2 bottom-8 font-bold"}>
         {productItem.price} {productItem.currency}
      </p>
      <span
         className={"absolute left-2 bottom-2 w-fit px-4 py-1 bg-[grey] rounded lg:text-[.5rem] lg:px-2 xl:text-[.6rem] xl:px-4 xl:w-fit"}
      >
                {productItem.category}
            </span>
      {onHoverState && (<div
         className={"absolute bottom-0 left-0 right-0 w-full h-1/4 bg-blue-300 rounded-b-2xl p-2 flex justify-between items-center"}
      >
         <p className={"font-bold"}>{productItem.name}</p>
         <button
            className={"px-4 py-2 bg-green-500 rounded hover:scale-105"}
            onClick={() => onAddToCart(productItem.id)}
         >
            Add to cart!
         </button>
      </div>)}
   </div>)
})

export default ProductItem

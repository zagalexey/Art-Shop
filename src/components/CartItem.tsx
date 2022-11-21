import React from "react"

import {ProductItemType} from "../interfaces"

interface CartItemProp {
   index: number
   cartItem: ProductItemType
   onItemDelete: (id: number) => void
}

const CartItem = ({index, cartItem, onItemDelete}: CartItemProp) => {
   return (<div
         className={"flex justify-between border rounded p-2 hover:bg-[grey]"}
      >
         <img
            className={"w-[40px] h-[30px]"}
            src={cartItem.image.src}
            alt={cartItem.image.alt}
         />
         <h2>{cartItem.name}</h2>
         <section className={"flex"}>
            <span className={"mr-1"}>{cartItem.price}</span>
            <span>{cartItem.currency}</span>
            <img
               className={"w-[25px] h-[25px] mx-2 hover:cursor-pointer"}
               src="https://img.icons8.com/ios-glyphs/30/null/delete.png"
               alt={"trash can"}
               onClick={() => onItemDelete(index)}
            />
         </section>
      </div>)
}

export default CartItem

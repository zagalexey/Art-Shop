import React, {useEffect, useState} from "react"
import CartItem from "./CartItem"

import {ProductItemType} from "../interfaces"

interface CartModalProps {
   items: ProductItemType[] | null
   onModalClose: () => void
   onItemDelete: (id: number) => void
   clearAll: () => void
}

const CartModal = ({
                      onModalClose, items, onItemDelete, clearAll,
                   }: CartModalProps) => {
   const [totalPrice, setTotalPrice] = useState<number>(0)

   useEffect(() => {
      if (items?.length) {
         setTotalPrice(sumTotal(items))
      } else {
         setTotalPrice(0)
      }
   }, [items])

   const sumTotal = (items: ProductItemType[]): number => {
      let sum: number = 0
      for (let i = 0; i < items.length; i++) {
         sum += items[i].price
      }
      return sum
   }

   return (<div
      className={"fixed z-10 top-0 right-0 h-auto w-1/4 flex flex-col items-center rounded-2xl p-2 bg-main shadow-2xl md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4"}
   >
      <section className={"w-full m-2 flex justify-between items-center"}>
         <h1 className={"font-bold"}>Shopping Cart</h1>
         <img
            className={"w-[30px] h-[30px] hover:cursor-pointer"}
            src="https://img.icons8.com/plumpy/24/null/macos-close.png"
            alt={"close modal"}
            onClick={() => onModalClose()}
         />
      </section>
      <section className={"w-full h-fit flex flex-col gap-2 m-2"}>
         {items?.length ? (items?.map((item, index) => (<CartItem
            key={index}
            index={index}
            cartItem={item}
            onItemDelete={onItemDelete}
         />))) : (<section className={"p-4 flex justify-center"}>
            <h2>Your cart is empty!</h2>
         </section>)}
      </section>
      <hr/>
      <section className={"w-full flex items-center m-2 justify-between"}>
         <h2 className={"font-bold"}>
            Total: <span>{totalPrice}</span>USD
         </h2>
         <button
            className={"px-3 py-1 bg-red-400 text-white rounded hover:scale-x-105"}
            onClick={clearAll}
         >
            Clear
         </button>
      </section>
   </div>)
}

export default CartModal

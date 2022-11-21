import React, {useEffect, useRef, useState} from "react"

import FilterCategory from "./FilterCategory"
import PriceInput from "./PriceInput";

import {FilterType} from "../constants";
import {data} from "../data/dummyData"

interface FilterProps {
   onCheck: (type: string, name: string, status: boolean) => void
   onPrice: (min: number, max: number) => void
}

const Filter = ({onCheck, onPrice}: FilterProps) => {
   const [categoryFilter, setCategoryFilter] = useState<string[] | null>(null)

   const minPriceRef = useRef<HTMLInputElement | null>(null)
   const maxPriceRef = useRef<HTMLInputElement | null>(null)

   useEffect(() => {
      setCategoryFilter(checkForCategories)
   }, [])

   const checkForCategories = (): string[] => {
      const arrayOfCategories: string[] = []
      data.products.forEach((item) => {
         if (!arrayOfCategories.includes(item.category)) {
            arrayOfCategories.push(item.category)
         }
      })
      return arrayOfCategories
   }

   return (<div className={"w-1/6 h-full rounded-2xl bg-main shadow-2xl p-4"}>
      <h1 className={"text-2xl font-bold m-2"}>Filter</h1>
      <h2 className={"font-bold m-2"}>Category</h2>
      <div
         className={"border-2 border-blue-300 rounded-xl p-2 sm:text-[.5rem] md:text-[.6rem] lg:text-[1rem]"}
      >
         {categoryFilter !== null ? (<ul>
            {categoryFilter?.map((item) => (<FilterCategory
               key={item}
               name={item}
               type={"category"}
               onCheck={onCheck}
            />))}
         </ul>) : (<p>No data</p>)}
      </div>
      <div className={"sm:text-[.5rem] md:text-[.6rem] lg:text-[1rem]"}>
         <h2 className={"font-bold m-2"}>Type</h2>
         <ul className={"border-2 border-blue-300 rounded-xl p-2"}>
            <FilterCategory
               name={FilterType.Featured}
               type={"type"}
               onCheck={onCheck}
            />
            <FilterCategory
               name={FilterType.Bestseller}
               type={"type"}
               onCheck={onCheck}
            />
         </ul>
      </div>
      <div className={"sm:text-[.5rem] md:text-[.6rem] lg:text-[1rem]"}>
         <h2 className={"font-bold m-2"}>Price</h2>
         <section
            className={"flex justify-evenly items-center border-2 border-blue-300 rounded-xl p-2 md:flex-col md:gap-1 xl:flex-row"}
         >
            <PriceInput ref={minPriceRef} name={'MIN'}/>
            <PriceInput ref={maxPriceRef} name={'MAX'}/>
            <button
               className={"h-full px-4 py-2 bg-green-500 text-white rounded hover:scale-105 md:w-full lg:px-2 lg:py-1"}
               onClick={() => {
                  onPrice(parseInt(minPriceRef.current!.value), parseInt(maxPriceRef.current!.value))
               }}
            >
               Filter
            </button>
         </section>
      </div>
   </div>)
}

export default Filter

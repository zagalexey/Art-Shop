import React, {useRef, useState} from "react"

import SortTypeDirection from "./SortTypeDirection"

import {data} from "../data/dummyData"
import {SortDirection, SortType} from "../constants"

interface ProductsWrapperProps {
   children: JSX.Element
   onSort: (type: string | undefined, direction: string) => void
}

const ProductsWrapper = ({children, onSort}: ProductsWrapperProps) => {
   const sortInputRef = useRef<HTMLSelectElement | null>(null)

   const [sortType, setSortType] = useState<string | null>(null)

   const sortIcons = {
      alphaASC: "https://img.icons8.com/windows/32/null/sort-alpha-up.png",
      alphaDSC: "https://img.icons8.com/windows/32/null/sort-alpha-up-reversed.png",
      numASC: "https://img.icons8.com/windows/32/null/sort-numeric-up.png",
      numDSC: "https://img.icons8.com/windows/32/null/sort-numeric-up-reversed.png",
   }

   const onSortHandler = (sortType: string, direction: string) => {
      console.log(sortType, direction)
      sortType ? setSortType(sortType) : setSortType(null)
      if (sortInputRef.current!.value) {
         switch (direction) {
            case SortDirection.Ascending:
               onSort(sortType, direction)
               break
            case SortDirection.Descending:
               onSort(sortType, direction)
               break
            default:
               return 0
         }
      }
   }

   return (<div
      className={"w-4/5 h-full flex justify-center bg-main rounded-2xl shadow-2xl"}
   >
      <div className={"w-[90%]"}>
         <section className={"m-3 flex flex-row justify-between"}>
            <div className={"flex items-center gap-5"}>
               <h1 className={"text-2xl font-bold"}>Our Products</h1>
               <p className={"text-[grey]"}>
                  {data.products.length} items
               </p>
            </div>
            <div className={"flex items-center"}>
               <select
                  ref={sortInputRef}
                  name="sorting"
                  id="sorting"
                  onChange={() => onSortHandler(sortInputRef.current!.value, SortDirection.Ascending)}
               >
                  <option value={SortType.None} defaultChecked={true}>
                     None
                  </option>
                  <option value={SortType.Alphabetic}>Alpha</option>
                  <option value={SortType.Numeric}>Num</option>
               </select>
               {sortType === SortType.Alphabetic ? (<fieldset id={"group1"} className={"flex"}>
                  <SortTypeDirection
                     sortType={SortType.Alphabetic}
                     sortDirection={SortDirection.Ascending}
                     onSortHandler={onSortHandler}
                     defaultCheck={true}
                     iconSrc={sortIcons.alphaASC}
                     parentRef={sortInputRef.current!.value}
                  />
                  <SortTypeDirection
                     sortType={SortType.Alphabetic}
                     sortDirection={SortDirection.Descending}
                     onSortHandler={onSortHandler}
                     defaultCheck={false}
                     iconSrc={sortIcons.alphaDSC}
                     parentRef={sortInputRef.current!.value}
                  />
               </fieldset>) : (<></>)}

               {sortType === SortType.Numeric ? (<fieldset id={"group1"} className={"flex"}>
                  <SortTypeDirection
                     sortType={SortType.Numeric}
                     sortDirection={SortDirection.Ascending}
                     onSortHandler={onSortHandler}
                     defaultCheck={true}
                     iconSrc={sortIcons.numASC}
                     parentRef={sortInputRef.current!.value}
                  />
                  <SortTypeDirection
                     sortType={SortType.Numeric}
                     sortDirection={SortDirection.Descending}
                     onSortHandler={onSortHandler}
                     defaultCheck={false}
                     iconSrc={sortIcons.numDSC}
                     parentRef={sortInputRef.current!.value}
                  />
               </fieldset>) : (<></>)}
            </div>
         </section>
         {children}
      </div>
   </div>)
}

export default ProductsWrapper
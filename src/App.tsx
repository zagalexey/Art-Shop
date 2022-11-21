import React, {useEffect, useState} from "react"

import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Products from "./components/Products"
import CartModal from "./components/CartModal"
import ProductsWrapper from "./components/ProductsWrapper"

import {CategoryType, ProductItemType} from "./interfaces"
import {data} from "./data/dummyData"
import {FilterType, SortDirection, SortType} from "./constants"

function App() {
   const [cartCounter, setCartCounter] = useState<number>(0)
   const [itemsInCart, setItemsInCart] = useState<ProductItemType[] | null>(null)
   const [cartModal, setCartModal] = useState<boolean>(false)
   const [displayedData, setDisplayedData] = useState<ProductItemType[]>(data.products)
   const [filterCategory, setFilterCategory] = useState<CategoryType[]>([])
   const [filterType, setFilterType] = useState([{name: FilterType.Featured, status: false}, {name: FilterType.Bestseller, status: false},])

   useEffect(() => {
      setDisplayedData(data.products)
      setFilterCategory(getCategories())
   }, [])

   useEffect(() => {
      setDisplayedData(filterByCategory())
   }, [filterCategory])

   useEffect(() => {
      filterByType()
   }, [filterType])

   const getCategories = (): CategoryType[] => {
      const tmpArr: string[] = []
      let categories: CategoryType[] = []
      data.products.forEach(item => {
         if (!tmpArr.includes(item.category)) {
            tmpArr.push(item.category)
         }
      })
      categories = tmpArr.map(item => {
         return {
            name: item, status: false
         }
      })
      return categories
   }

   const onCartAddHandler = (id: number): void => {
      const currentProduct: ProductItemType | undefined = data.products.find((item) => item.id === id)
      if (currentProduct && itemsInCart) {
         setItemsInCart([...itemsInCart, currentProduct])
      } else {
         setItemsInCart([currentProduct!])
      }
      setCartCounter(cartCounter + 1)
      setCartModal(true)
   }

   const modalHandler = (): void => {
      setCartModal((prevState) => !prevState)
   }

   const onCartItemsDelete = (index: number) => {
      const firstItemsArray = itemsInCart?.slice(0, index)
      const secondItemsArray = itemsInCart?.slice(index + 1, itemsInCart?.length)
      if (firstItemsArray && secondItemsArray) {
         setItemsInCart([...firstItemsArray, ...secondItemsArray])
      }
      setCartCounter(cartCounter - 1)
   }

   const onAllCartItemsDelete = (): void => {
      setItemsInCart(null)
      setCartCounter(0)
   }

   const filterByCategory = (): ProductItemType[] => {
      let filteredProducts: ProductItemType[] = []
      for (let i = 0; i < filterCategory.length; i++) {
         let tmpArr: ProductItemType[] = []
         if (filterCategory[i].status) {
            tmpArr = data.products.filter((item) => item.category === filterCategory[i].name)
            filteredProducts = [...filteredProducts, ...tmpArr]
         }
      }
      if (filteredProducts.length) {
         return filteredProducts
      } else {
         return data.products
      }
   }

   const filterByType = (): void => {
      let filteredProducts: ProductItemType[] = filterByCategory()
      for (let i = 0; i < filterType.length; i++) {
         let tmpArr: ProductItemType[] = []
         if (filterType[i].status) {
            if (filterType[i].name === "Featured") {
               tmpArr = filteredProducts.filter((item) => item.featured === filterType[i].status)
            } else {
               tmpArr = filteredProducts.filter((item) => item.bestseller === filterType[i].status)
            }
            filteredProducts = [...tmpArr]
         }
      }
      if (filteredProducts.length) {
         setDisplayedData([...filteredProducts])
      } else {
         setDisplayedData(filteredProducts)
      }
   }

   const onFilterHandler = (name: string, type: string, status: boolean): void => {
      if (type === "category") {
         setFilterCategory((prevState) => prevState.map((item) => item.name === name ? {...item, status: status} : item))
      } else {
         setFilterType((prevState) => prevState.map((item) => item.name === name ? {...item, status: status} : item))
      }
   }

   const onPriceFilter = (min: number | null, max: number | null) => {
      let filteredData: ProductItemType[] = filterByCategory()
      if (min && max) {
         filteredData = filteredData.filter((item) => item.price >= min && item.price <= max)
         setDisplayedData(filteredData)
      } else if (min) {
         filteredData = filteredData.filter((item) => item.price >= min)
         setDisplayedData(filteredData)
      } else if (max) {
         filteredData = filteredData.filter((item) => item.price <= max)
         setDisplayedData(filteredData)
      } else {
         setDisplayedData(filterByCategory())
      }
   }

   const sort = (type: string, direction: string, data: ProductItemType[]): ProductItemType[] => {
      let tmpData = data
      if (type === SortType.Alphabetic) {
         if (direction === SortDirection.Ascending) {
            return tmpData.sort((a, b) => {
               let fa = a.name.toLowerCase(), fb = b.name.toLowerCase()
               if (fa < fb) {
                  return -1
               }
               if (fa > fb) {
                  return 1
               }
               return 0
            })
         } else {
            return tmpData.sort((a, b) => {
               let fa = a.name.toLowerCase(), fb = b.name.toLowerCase()
               if (fa > fb) {
                  return -1
               }
               if (fa < fb) {
                  return 1
               }
               return 0
            })
         }
      } else if (type === SortType.Numeric) {
         if (direction === SortDirection.Ascending) {
            return tmpData.sort((a, b) => {
               return a.price - b.price
            })
         } else {
            return tmpData.sort((a, b) => {
               return b.price - a.price
            })
         }
      } else {
         return displayedData
      }
   }

   const onSortHandler = (type: string | undefined, direction: string): void => {
      let sortedProducts: ProductItemType[] = []
      if (type === SortType.Alphabetic) {
         sortedProducts = sort(type, direction, displayedData)
         setDisplayedData([...sortedProducts])
      } else if (type === SortType.Numeric) {
         sortedProducts = sort(type, direction, displayedData)
         setDisplayedData([...sortedProducts])
      } else {
         setDisplayedData([...filterByCategory()])
      }
   }

   return (<div className={"w-full h-full"}>
      {cartModal && (<CartModal
         items={itemsInCart}
         onModalClose={modalHandler}
         onItemDelete={onCartItemsDelete}
         clearAll={onAllCartItemsDelete}
      />)}
      <Navbar itemsInsideCart={cartCounter} onModalClick={modalHandler}/>
      <div className={"w-full h-full flex gap-5 mt-5"}>
         <Filter onCheck={onFilterHandler} onPrice={onPriceFilter}/>
         <ProductsWrapper onSort={onSortHandler}>
            <Products
               displayedData={displayedData}
               onAddToCart={onCartAddHandler}
            />
         </ProductsWrapper>
      </div>
   </div>)
}

export default App
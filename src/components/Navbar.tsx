import React from "react"

interface NavbarProps {
   itemsInsideCart: number
   onModalClick: () => void
}

const Navbar = ({itemsInsideCart, onModalClick}: NavbarProps) => {
   return (<nav
      className={"w-full h-[50px] bg-blue-300 flex flex-row items-center justify-center"}
   >
      <div
         className={"w-[90%] h-full flex flex-row items-center justify-between"}
      >
         <span className={"text-2xl font-extrabold"}>Art Shop</span>
         <div
            className={"relative flex justify-center items-center w-[40px] h-[40px] hover:cursor-pointer"}
            onClick={() => onModalClick()}
         >
                    <span
                       className={"absolute top-0 right-0 p-[3px] rounded-2xl bg-red-500 text-white text-[.8rem]"}
                    >
                        {itemsInsideCart}
                    </span>
            <img
               src="https://img.icons8.com/ios-glyphs/30/null/shopping-cart--v1.png"
               alt={"shopping cart"}
            />
         </div>
      </div>
   </nav>)
}

export default Navbar

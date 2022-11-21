import React, {useRef} from "react"

interface SortDirectionProps {
   sortType: string
   sortDirection: string
   iconSrc: string
   defaultCheck: boolean
   parentRef: string
   onSortHandler: (sortType: string, sortDirection: string) => void
}

const SortTypeDirection = ({
                              sortType, sortDirection, iconSrc, defaultCheck, parentRef, onSortHandler,
                           }: SortDirectionProps) => {
   const inputRef = useRef<HTMLInputElement | null>(null)
   return (<>
      <label htmlFor={sortDirection}>
         <img src={iconSrc} alt={`${sortType} ${sortDirection}`}/>
      </label>
      <input
         id={sortDirection}
         value={sortDirection}
         type="radio"
         defaultChecked={defaultCheck}
         ref={inputRef}
         name={"group1"}
         onChange={() => onSortHandler(parentRef, inputRef.current!.value)}
      />
   </>)
}

export default SortTypeDirection

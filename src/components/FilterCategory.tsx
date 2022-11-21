import React, { useRef } from "react"

interface FilterCategoryProps {
    name: string
    type: string
    onCheck: (type: string, name: string, status: boolean) => void
}

const FilterCategory = ({ name, type, onCheck }: FilterCategoryProps) => {
    const filterRef = useRef<HTMLInputElement | null>(null)

    return (
        <li key={name} className={"flex justify-between items-center"}>
            <label htmlFor={name}>{name}</label>
            <input
                ref={filterRef}
                type="checkbox"
                id={name}
                onChange={() => {
                    onCheck(
                        filterRef.current!.id,
                        type,
                        filterRef.current!.checked
                    )
                }}
            />
        </li>
    )
}

export default FilterCategory

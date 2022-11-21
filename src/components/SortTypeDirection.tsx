import React, { useRef } from "react"

interface SortDirectionProps {
    sortType: string
    sortDirection: string
    iconSrc: string
    defaultCheck: boolean
    parentRef: HTMLSelectElement | null
    onSortHandler: (
        sortType: string | undefined,
        sortDirection: string | undefined
    ) => void
}

const SortDirection = ({
    sortType,
    sortDirection,
    iconSrc,
    defaultCheck,
    parentRef,
    onSortHandler,
}: SortDirectionProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    return (
        <>
            <label htmlFor={sortDirection}>
                <img src={iconSrc} alt={`${sortType} ${sortDirection}`} />
            </label>
            <input
                id={sortDirection}
                value={sortDirection}
                type="radio"
                defaultChecked={defaultCheck}
                ref={inputRef}
                onChange={() =>
                    onSortHandler(
                        // parentRef.current.value,
                        "1",
                        inputRef.current?.value
                    )
                }
            />
        </>
    )
}

export default SortDirection

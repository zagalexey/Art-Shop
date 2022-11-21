import React from "react"

interface ProductLabelProps {
    type: string
}

const ProductLabel = ({ type }: ProductLabelProps) => {
    return (
        <section className={"relative p-1 bg-white rounded-2xl"}>
            <img
                className={"w-[1.8rem] h-[1.8rem]"}
                src={
                    type === "featured"
                        ? "https://img.icons8.com/fluency/48/null/star.png"
                        : "https://img.icons8.com/external-flat-satawat-anukul/64/null/external-ecommerce-ecommerceflat-flat-satawat-anukul-21.png"
                }
                alt={type}
            />
        </section>
    )
}

export default ProductLabel

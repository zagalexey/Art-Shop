export interface ProductItemType {
   id: number
   name: string
   category: string
   price: number
   currency: string
   image: {
      src: string
      alt: string
   }
   bestseller: boolean
   featured: boolean
   details?: ProductItemDetails | null
}

export type ProductItemDetails = {
   dimensions?: {
      width: number
      height: number
   }
   size?: number
   description?: string
}

export interface CategoryType {
   name: string,
   status: boolean
}

export interface addProduct{
    name:string,
    price:string,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined | number,
    productId: undefined | number
}

export interface cart {
    name:string,
    price:string,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number | undefined,
    quantity:undefined | number,
    productId:number,
    userId:number
}

export interface priceSummary {
    price:number
    discount:number
    tax:number
    delivery:number
    total:number
}
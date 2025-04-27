
  
 export interface Variant {
   color: string;
   sizes:Size[]
   images:string[];
 }
  export type price={
   local:number;
  }
  export interface Category {
    _id: string;
    categoryName:string;
    description:string;
    imageURL:string;

}
  export interface Collection {
    _id: string;
    collectionName:string;
    description:string;
    imageURL:string;
    products?:string[];

}
export interface SubCategory {
_id: string;
SubCategoryName:string;
products :string[];
imageUrl:string;
collectionID:string;
description:string;
}

 export interface Product {
    _id: string;
    title: string;
    description: string;
    price: price;
    categoryID: string;
    variations: Variant[];
    productDimensions:string[];
      productDetails:string[];
      productCare:string[];
  }

  export type AddProductType = Omit<Product, '_id'>;

  export interface Newsletters{
   name:string;
   number:string;
   _id:string;
  }


  export interface ImageVariant
  {
     image:string;
     color:string 
  }
  export interface Size
  {
   //   type:string;
     name:string
     stock:number 
  }
  export interface CartItem 
  {
   id:number;
   productId: string,
   productName: string,
   price: number,
   size: string
   quantity: number,
   imageUrl: string,
   color: string

  }

  export type FeaturedProduct = Omit<CartItem, 'id' | 'quantity'>;

//   export interface FeaturedProduct 
//   {
//    productId: string,
//    productName: string,
//    price: number,
//    imageUrl: string,
//    color:string
//   }
  export interface User {
   email:string;
   userId:string;
   userCountry:string;
   firstName:string;
   lastName:string;
   title:string;
   phoneNumber:string;
   address:string;
   deviceType:string
   // phoneCode:string;
   dob:string;
  }
export interface IOrder {
    _id:string;
    email: string;
    orderID?: string;
    country?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    apartment?: string;
    postalZip?: string;
    city?: string;
    state?: string;
    phone?: string;
    cash?: boolean;
    cart?: CartItem[]; // Assuming CartItem interface exists
    subTotal?: number;
    total?: number;
    currency?: string;
    status?: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
    payment?: "pending" | "failed" | "confirmed";
    billingCountry?: string;
    billingFirstName?: string;
    billingState?: string;
    billingLastName?: string;
    billingAddress?: string;
    billingApartment?: string;
    billingPostalZip?: string;
    billingCity?: string;
    billingPhone?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

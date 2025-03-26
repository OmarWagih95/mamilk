export interface User {
   email:string;
   userId:string;
   userCountry:string;
   firstName:string;
   lastName:string;
   title:string;
   phoneNumber:string;
   address:string;
   // phoneCode:string;
   dob:string;
   deviceType:string;
  }
  
 export interface Variant {
    color: string;
    sizes:Size[]
    images:string[];
    stock: number;
  }


 export interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    variations: Variant[];
    productDimensions:string[];
      productDetails:string[];
      productCare:string[];
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
  }
  export interface CartItem 
  {
   id:number;
   productId: string,
   productName: string,
   price: number,
   size: string,
   quantity: number,
   imageUrl: string,
   color: string

  }

//   export type FeaturedProduct = Omit<CartItem, 'id' | 'quantity'>;



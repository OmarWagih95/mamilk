import {  Collection, ImageVariant, Product } from "./interfaces/interfaces";

const Categories:Category[]=
     //     {text:"Portfolio",link:"/"},
     [{
      "_id":  "67e2b261630c109896771f90"
      ,
      "categoryName": "Tops",
      "description": "wolf"
    },
    {
      "_id":  "67e2dfbd630c109896771f91"
      ,
      "categoryName": "Dresses"
    },
    {
      "_id":  "67e2e60dad1aeb81400d9970"
      ,
      "categoryName": "Bottoms",
     
    },
    {
      "_id":  "67e3c7112fe97723301d6ff4"
      ,
      "categoryName": "Maternity",
     
    },
    {
      "_id":  "67e3c7182fe97723301d6ff8"
      ,
      "categoryName": "Sets",
    },
    {
      "_id":  "67e4a20423d644057f9fd265"
      ,
      "categoryName": "Hoodie",
     
    }]
const collections:Collection[]=
     //     {text:"Portfolio",link:"/"},
     [{
      _id:  "67e2b261630c109896771f90"
      ,
      description: "wolf",
      imageURL:"/winter.JPG",
      collectionName: "Winter Essentials",
    },
    {
      _id:  "67e2dfbd630c109896771f91"
      ,
      description: "wolf",
      imageURL:"/maternity.jpg",
      collectionName: "Maternity Essentials"
    },
    {
      "_id":  "67e2e60dad1aeb81400d9970"
      ,
      description: "wolf",
      imageURL:"/summer.jpg",
      collectionName: "Summer Essentials"
     
    },
]


// export const testProducts: Product[] = [
//     {
//       _id: "prod_001",
//       title: "Product 1",
//       description: "A premium leather handbag perfect for all occasions.",
//       price: 150,
//       variations: [
//         {
//           color: "green",
//           sizes: [
//             { type: "One Size", name: "OS" }
//           ],
//           images: [
//             "/category8.jpeg",
//             "/product12.jpeg",
//             "/product13.jpeg",

//           ],
//           stock: 20
//         },
//         {
//           color: "Brown",
//           sizes: [
//             { type: "One Size", name: "OS" }
//           ],
//           images: [
//             "/category8.jpeg",
//             "/product12.jpeg",
//             "/product13.jpeg",
//           ],
//           stock: 15
//         }
//       ],
//       productDimensions: ["30cm x 20cm x 10cm"],
//       productDetails: ["100% Genuine Leather", "Gold-tone hardware", "Adjustable strap"],
//       productCare: ["Wipe with a soft cloth", "Avoid direct sunlight"]
//     },
//     {
//       _id: "prod_002",
//       title: "Product 2",
//       description: "Comfortable sneakers designed for everyday wear.",
//       price: 90,
//       variations: [
//         {
//           color: "Off-White",
//           sizes: [
//             { type: "EU", name: "40" },
//             { type: "EU", name: "42" }
//           ],
//           images: [
//             "/product2.jpeg",
//             "/product21.jpeg"          ],
//           stock: 30
//         },
//         {
//           color: "Blue",
//           sizes: [
//             { type: "EU", name: "41" },
//             { type: "EU", name: "43" }
//           ],
//           images: [
//             "/test1.jpeg",
//             "https://example.com/images/sneakers-blue-2.jpg"
//           ],
//           stock: 25
//         }
//       ],
//       productDimensions: ["Length: 28cm"],
//       productDetails: ["Breathable mesh upper", "Lightweight rubber sole", "Slip-resistant"],
//       productCare: ["Machine washable", "Air dry only"]
//     },
//     // {
//     //   _id: "prod_003",
//     //   title: "Luxury Silk Scarf",
//     //   description: "A soft and elegant silk scarf with a floral pattern.",
//     //   price: 59.99,
//     //   variations: [
//     //     {
//     //       color: "Red",
//     //       sizes: [
//     //         { type: "One Size", name: "OS" }
//     //       ],
//     //       images: [
//     //         "/test1.jpeg",
//     //         "https://example.com/images/scarf-red-2.jpg"
//     //       ],
//     //       stock: 40
//     //     }
//     // ,    {
//     //       color: "Black",
//     //       sizes: [
//     //         { type: "One Size", name: "OS" },{ type: "One Size", name: "xl" }
//     //       ],
//     //       images: [
//     //         "/test1.jpeg",
//     //         "https://example.com/images/scarf-red-2.jpg"
//     //       ],
//     //       stock: 40
//     //     }
//     //   ],
//     //   productDimensions: ["90cm x 90cm"],
//     //   productDetails: ["100% Silk", "Hand-stitched edges", "Limited edition print"],
//     //   productCare: ["Dry clean only", "Store in a cool, dry place"]
//     // }
//   ];
  
  // Sample Cart Items

  
  // Sample Image Variants
  // export const testImageVariants: ImageVariant[] = [
  //   {
  //     image: "https://example.com/images/handbag-black-1.jpg",
  //     color: "Black"
  //   },
  //   {
  //     image: "https://example.com/images/sneakers-white-1.jpg",
  //     color: "White"
  //   }
  // ];
  



 const constants={Categories:Categories,collections:collections,
}

export default constants;

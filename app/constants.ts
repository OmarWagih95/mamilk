import { CartItem, ImageVariant, Product } from "./interfaces/interfaces";

const Categories:Category[]=[
     //     {text:"Portfolio",link:"/"},
     {categoryName:"DRESS",path:"/pages/categories/",id:1,imageURL:"/category8.jpeg"},
     {categoryName:"TOPS",path:"/pages/categories/",id:1,imageURL:"/category2.jpeg"},
     {categoryName:"BOTTOMS",path:"/pages/categories/",id:1,imageURL:"/category6.jpeg"},
    {categoryName:"HOODIE",path:"/pages/categories/",id:1,imageURL:"/category7.jpeg"},
    {categoryName:"MATERNITY",path:"/pages/categories/",id:1,imageURL:"/category5.jpeg"},
    {categoryName:"SET",path:"/pages/categories/",id:1,imageURL:"/category4.jpeg"},

]
export const testProducts: Product[] = [
    {
      _id: "prod_001",
      title: "Elegant Leather Handbag",
      description: "A premium leather handbag perfect for all occasions.",
      price: 149.99,
      variations: [
        {
          color: "Black",
          sizes: [
            { type: "One Size", name: "OS" }
          ],
          images: [
            "/category1.jpeg",
            "https://example.com/images/handbag-black-2.jpg"
          ],
          stock: 20
        },
        {
          color: "Brown",
          sizes: [
            { type: "One Size", name: "OS" }
          ],
          images: [
            "/category1.jpeg",
            "https://example.com/images/handbag-brown-2.jpg"
          ],
          stock: 15
        }
      ],
      productDimensions: ["30cm x 20cm x 10cm"],
      productDetails: ["100% Genuine Leather", "Gold-tone hardware", "Adjustable strap"],
      productCare: ["Wipe with a soft cloth", "Avoid direct sunlight"]
    },
    {
      _id: "prod_002",
      title: "Casual Sneakers",
      description: "Comfortable sneakers designed for everyday wear.",
      price: 89.99,
      variations: [
        {
          color: "White",
          sizes: [
            { type: "EU", name: "40" },
            { type: "EU", name: "42" }
          ],
          images: [
            "/category1.jpeg",
            "https://example.com/images/sneakers-white-2.jpg"
          ],
          stock: 30
        },
        {
          color: "Blue",
          sizes: [
            { type: "EU", name: "41" },
            { type: "EU", name: "43" }
          ],
          images: [
            "/category1.jpeg",
            "https://example.com/images/sneakers-blue-2.jpg"
          ],
          stock: 25
        }
      ],
      productDimensions: ["Length: 28cm"],
      productDetails: ["Breathable mesh upper", "Lightweight rubber sole", "Slip-resistant"],
      productCare: ["Machine washable", "Air dry only"]
    },
    {
      _id: "prod_003",
      title: "Luxury Silk Scarf",
      description: "A soft and elegant silk scarf with a floral pattern.",
      price: 59.99,
      variations: [
        {
          color: "Red",
          sizes: [
            { type: "One Size", name: "OS" }
          ],
          images: [
            "/category1.jpeg",
            "https://example.com/images/scarf-red-2.jpg"
          ],
          stock: 40
        }
    ,    {
          color: "Black",
          sizes: [
            { type: "One Size", name: "OS" },{ type: "One Size", name: "xl" }
          ],
          images: [
            "/category1.jpeg",
            "https://example.com/images/scarf-red-2.jpg"
          ],
          stock: 40
        }
      ],
      productDimensions: ["90cm x 90cm"],
      productDetails: ["100% Silk", "Hand-stitched edges", "Limited edition print"],
      productCare: ["Dry clean only", "Store in a cool, dry place"]
    }
  ];
  
  // Sample Cart Items
  export const testCartItems: CartItem[] = [
    {
      id: 1,
      productId: "prod_001",
      productName: "Elegant Leather Handbag",
      price: 149.99,
      quantity: 1,
      imageUrl: "https://example.com/images/handbag-black-1.jpg",
      color: "Black"
    },
    {
      id: 2,
      productId: "prod_002",
      productName: "Casual Sneakers",
      price: 89.99,
      quantity: 2,
      imageUrl: "https://example.com/images/sneakers-white-1.jpg",
      color: "White"
    }
  ];
  
  // Sample Image Variants
  export const testImageVariants: ImageVariant[] = [
    {
      image: "https://example.com/images/handbag-black-1.jpg",
      color: "Black"
    },
    {
      image: "https://example.com/images/sneakers-white-1.jpg",
      color: "White"
    }
  ];
  



 const constants={Categories:Categories, products:testProducts
}

export default constants;

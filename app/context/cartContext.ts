import { createContext } from "react";
import { CartItem } from "../interfaces/interfaces";

// export const cartContext=createContext<CartItem[]>([]);

interface CartContextType {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  }
  
 export  const cartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => {},
  });
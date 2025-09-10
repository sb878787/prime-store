'use client'

import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext";

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
}
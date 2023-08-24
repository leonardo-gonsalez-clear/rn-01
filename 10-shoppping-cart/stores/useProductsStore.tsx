import { create } from 'zustand';

const data = [
  {
    id: '1',
    name: "Coca cola",
    price: 19.90
  },
  {
    id: '2',
    name: "Chocolate",
    price: 6.50
  },
  {
    id: '4',
    name: "Queijo 500g",
    price: 15
  },
  {
    id: '5',
    name: "Batata frita",
    price: 23.90
  },
  {
    id: '6',
    name: "Guarana lata",
    price: 6.00
  },
]

export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
  total: number;
}

interface IProductsStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  cart: ICartItem[];
  setCart: (cart: ICartItem[]) => void;

}

export const useProductsStore = create<IProductsStore>((set) => ({
  products: data,
  setProducts: (products) => set({ products }),
  cart: [],
  setCart: (cart) => set({ cart })
}));

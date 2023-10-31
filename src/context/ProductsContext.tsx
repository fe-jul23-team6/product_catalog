/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import {
  createContext,
  ReactNode,
  useState,
} from 'react';
import { Phone } from 'types';
import { LocalStorageCart } from 'types/LocalStorageCart';

type ProductsProviderProps = {
  children: ReactNode
};

type ProductsContextType = {
  currentCart: LocalStorageCart;
  cartItemsIds: number[];
  setCartItemsIds: (ids: number[]) => void;
  cartItems: Phone[];
  setCartItems: (items: Phone[]) => void;
  currentFavoritesIds: number[],
  handleDelete: (id: number) => void;
  handleCountMinus: (id: number) => void;
  handleCountPlus: (id: number) => void;
  toggleItemToCart: (id: number) => void;
  toggleItemToFavourites: (id: number) => void;
  checkInCart: (id: number) => boolean;
  checkInFav: (id: number) => boolean;
  isCartEmpty: boolean;
  setIsCartEmpty: React.Dispatch<React.SetStateAction<boolean>>
};

export const ProductsContext = createContext<ProductsContextType>({
  currentCart: [],
  cartItemsIds: [],
  setCartItemsIds: () => {},
  cartItems: [],
  setCartItems: () => {},
  currentFavoritesIds: [],
  handleDelete: () => {},
  handleCountMinus: () => {},
  handleCountPlus: () => {},
  toggleItemToCart: () => false,
  toggleItemToFavourites: () => false,
  checkInCart: () => false,
  checkInFav: () => false,
  isCartEmpty: false,
  setIsCartEmpty: () => {},
});

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  const storedCart = localStorage.getItem('cartItems');
  const [currentCart, setCurrentCart] = useState<LocalStorageCart>(
    storedCart
      ? JSON.parse(storedCart)
      : [],
  );
  const itemsIds: number[] = currentCart.map(item => item[0]);

  const [cartItemsIds, setCartItemsIds] = useState(itemsIds);
  const [cartItems, setCartItems] = useState<Phone[]>([]);

  const storedFavouritesIds = localStorage.getItem('favouritesIds');
  const currentFavoritesIds: number[] = JSON.parse(storedFavouritesIds || '[]');

  const handleDelete = (id: number) => {
    const updatedCartItemsIds = cartItemsIds.filter(item => item !== id);
    const updatedCart = currentCart.filter(val => val[0] !== id);

    setCartItemsIds(updatedCartItemsIds);
    setCartItems(cartItems.filter(item => +item.id !== id));
    setCurrentCart(updatedCart);

    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storageChange'));
  };

  const handleCountMinus = (id: number) => {
    if (cartItemsIds.includes(id)) {
      const data = cartItemsIds.indexOf(id);

      const dataToSet = cartItemsIds.filter((item, index) => index !== data);

      setCartItemsIds([...dataToSet]);
    }

    setCurrentCart(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStorageCart = [...prevCart];

      copy[index][1] -= 1;
      if (copy[index][1] === 0) {
        copy.splice(index, 1);

        setCartItems(prevCartItems => prevCartItems
          .filter(item => +item.id !== id));
      }

      localStorage.setItem('cartItems', JSON.stringify(copy));
      window.dispatchEvent(new Event('storageChange'));

      return copy;
    });
  };

  const handleCountPlus = (id: number) => {
    setCartItemsIds(prevIds => [...prevIds, id]);

    setCurrentCart(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStorageCart = [...prevCart];

      copy[index][1] += 1;

      localStorage.setItem('cartItems', JSON.stringify(copy));
      window.dispatchEvent(new Event('storageChange'));

      return copy;
    });
  };

  const toggleItemToCart = (id:number) => {
    const itemIndex = currentCart.findIndex(item => item[0] === id);

    if (itemIndex === -1) {
      currentCart.push([id, 1]);
    } else {
      currentCart.splice(itemIndex, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    window.dispatchEvent(new Event('storageChange'));
  };

  const toggleItemToFavourites = (id: number) => {
    if (!currentFavoritesIds.includes(id)) {
      currentFavoritesIds.push(id);
    } else {
      const index = currentFavoritesIds.indexOf(id);

      currentFavoritesIds.splice(index, 1);
    }

    localStorage.setItem('favouritesIds', JSON.stringify(currentFavoritesIds));
    window.dispatchEvent(new Event('storageChange'));
  };

  const checkInCart = (id: number) => {
    const itemIndex = currentCart.findIndex(item => item[0] === id);

    if (itemIndex === -1) {
      return false;
    }

    return true;
  };

  const checkInFav = (id: number) => {
    if (!currentFavoritesIds.includes(id)) {
      return false;
    }

    return true;
  };

  const value = {
    currentCart,
    cartItemsIds,
    setCartItemsIds,
    cartItems,
    setCartItems,
    currentFavoritesIds,
    handleDelete,
    handleCountMinus,
    handleCountPlus,
    toggleItemToCart,
    toggleItemToFavourites,
    checkInCart,
    checkInFav,
    isCartEmpty,
    setIsCartEmpty,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

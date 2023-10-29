/* eslint-disable max-len */
import {
  useState,
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
} from 'react';

interface CartContextType {
  cartPhonesIds: number[];
  setCartPhonesIds: Dispatch<SetStateAction<number[]>>;
}

export const CartContext = createContext<CartContextType>({
  cartPhonesIds: [],
  setCartPhonesIds: () => {},
});

export const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const cartLocalStorage = localStorage.getItem('cart');
  const cartPurchases: number[][] = JSON.parse(cartLocalStorage || '[]');
  const cartData: number[] = cartPurchases.map(item => item[0]);

  const [cartPhonesIds, setCartPhonesIds] = useState(cartData);

  const value = {
    cartPhonesIds,
    setCartPhonesIds,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

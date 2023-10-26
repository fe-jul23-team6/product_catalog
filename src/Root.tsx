import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { FavouritesPage } from 'pages/FavouritesPage';
import { BurgerMenu } from 'components/BurgerMenu';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ItemCardPage } from './pages/ItemCardPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="menu" element={<BurgerMenu />} />
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="phones">
          <Route index element={<CatalogPage />} />
          <Route path=":PhoneId" element={<ItemCardPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

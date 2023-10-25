import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { Favourites } from 'pages/Favourites';
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
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<BurgerMenu />} />
        <Route path="phones">
          <Route index element={<CatalogPage />} />
          <Route path=":PhoneId" element={<ItemCardPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

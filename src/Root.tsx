import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { FavouritesPage } from 'pages/FavouritesPage';
import { BurgerMenu } from 'components/BurgerMenu';
import { ContactsPage } from 'pages/ContactsPage';
import { App } from './App';
import {
  CartPage,
  HomePage,
  PhonesPage,
  ItemCardPage,
  NotFoundPage,
} from './pages';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="menu" element={<BurgerMenu />} />
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route path=":PhoneId" element={<ItemCardPage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

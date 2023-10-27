import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { FavouritesPage } from 'pages/FavouritesPage';
import { BurgerMenu } from 'components/BurgerMenu';
import { ContactsPage } from 'pages/ContactsPage';
import { CatalogPage } from 'pages/CatalogPage';
import { App } from './App';
import {
  CartPage,
  HomePage,
  ItemCardPage,
  NotFoundPage,
} from './pages';

// eslint-disable-next-line max-len
const jsonData = '{"id":1,"category":"phones","phoneId":"apple-iphone-7-32gb-black","itemId":"apple-iphone-7-32gb-black","name":"Apple iPhone 7 32GB Black","fullPrice":400,"price":375,"screen":"4.7\' IPS","capacity":"32GB","color":"black","ram":"2GB","year":2016,"image":"img/phones/apple-iphone-7/black/00.jpg"}';

const phone = JSON.parse(jsonData);
// DO NOT DELETE YET, this is for local testing

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
        <Route path="cart" element={<CartPage phone={phone} />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

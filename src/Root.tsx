import {
  Route,
  Routes,
  Navigate,
  HashRouter as Router,
} from 'react-router-dom';

import {
  CartPage,
  HomePage,
  RightsPage,
  TabletsPage,
  CatalogPage,
  ContactsPage,
  ItemCardPage,
  NotFoundPage,
  FavouritesPage,
  AccessoriesPage,
} from './pages';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="phones">
          <Route index element={<CatalogPage />} />
          <Route path=":productId" element={<ItemCardPage />} />
        </Route>

        <Route path="tablets">
          <Route index element={<TabletsPage />} />
          <Route path=":productId" element={<ItemCardPage />} />
        </Route>

        <Route path="accessories">
          <Route index element={<AccessoriesPage />} />
          <Route path=":productId" element={<ItemCardPage />} />
        </Route>

        <Route path="cart" element={<CartPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="rights" element={<RightsPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);

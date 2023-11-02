import {
  Route,
  Routes,
  Navigate,
  HashRouter as Router,
} from 'react-router-dom';

import { App } from 'App';
import {
  CartPage,
  HomePage,
  RightsPage,
  TabletsPage,
  PhonesPage,
  ContactsPage,
  ItemCardPage,
  NotFoundPage,
  FavouritesPage,
  AccessoriesPage,
} from 'pages';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="phones">
          <Route index element={<PhonesPage />} />
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

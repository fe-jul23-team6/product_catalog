// import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { CartItem } from 'components/CartItem/CartItem';
import { Footer } from './components/Footer';

import './index.scss';

export const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__body">
        {/* <Outlet /> */}
        <CartItem />
      </main>
      <Footer />
    </div>
  );
};

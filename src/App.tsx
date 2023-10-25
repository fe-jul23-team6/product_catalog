import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { Header } from './components/Header';

import './index.scss';

export const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__body">

        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from './components/Footer';

import './index.scss';

export const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="page">
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      {!menuIsOpen
        && (
          <>
            <main className="page__body">
              <Outlet />
            </main>
            <Footer />
          </>
        )}
    </div>
  );
};

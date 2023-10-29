import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from './components/Footer';

import './index.scss';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {!isMenuOpen
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

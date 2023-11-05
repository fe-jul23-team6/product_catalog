import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'components';
import { useTheme } from 'hooks';

import './index.scss';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="page">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />
      {!isMenuOpen
        && (
          <>
            <main className="page__body">
              <Outlet />
            </main>
            <Footer theme={theme} />
          </>
        )}
    </div>
  );
};

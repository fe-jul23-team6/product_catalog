import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './index.scss';

export const App = () => {
  return (
    <html lang="en" className="page">
      <body className="page__body">
        <Header />
        <main className="section">
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

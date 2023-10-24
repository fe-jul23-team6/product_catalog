// import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { HomePage } from './pages/HomePage';
import './index.scss';

export const App = () => {
  return (
    <html lang="en" className="page">
      <Header />

      <body className="page__body">
        <HomePage />
      </body>
    </html>
  );
};

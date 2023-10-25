// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Dropdown } from 'components/UI/Dropdown';
import { Header } from './components/Header';
import './index.scss';

export const App = () => {
  const desc = 'asdfg';
  const title = 'qwerty';

  return (
    <html lang="en" className="page">
      <body className="page__body">
        <Header />
        <main className="section">
          <div className="container">
            <Outlet />
          </div>
        </main>

        <Dropdown
          title={title}
          description={desc}
          options={['qwe', 'asd', 'zxc']}
        />
        <Footer />
      </body>
    </html>
  );
};

import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <>
    <Navigation />

    <div>
      <Outlet />
    </div>
    </>
  );
};

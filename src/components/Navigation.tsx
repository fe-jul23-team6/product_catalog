import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/phones">
              Phones
            </NavLink>

            <NavLink to="/tablets">
              Tablets
            </NavLink>

            <NavLink to="/accessories">
              Accessories
            </NavLink>
      </nav>

      <main className="section">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
import { Topbar } from '../Topbar';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Topbar />
            <div className="header__bottom">
              <h1
                className="header__title"
              >
                Welcome to Nice Gadgets store!
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

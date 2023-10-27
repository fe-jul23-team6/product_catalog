// import styles from './CartItem.module.scss';
import { ReactComponent as CloseSvg } from 'assets/img/icons/close_icon.svg';
// import { ReactComponent as PlusSvg } from 'assets/img/icons/plus_icon.svg';
// import { Button } from 'components/UI/Buttons';
// import { ButtonType } from 'types';
import image from '../../assets/img/phones/apple-iphone-11-pro/gold/00.jpg';

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__top">
        <CloseSvg />
        <div className="cart-item__img-container">
          <img
            className="cart-item__img"
            src={image}
            alt="product"
          />
        </div>
        <h4 className="cart-item__title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9GFS/A)
        </h4>
      </div>

      {/* <Button
        btnType={ButtonType.Slider}
        content={<PlusSvg />}
      /> */}

    </div>

  );
};

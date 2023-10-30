import { NavLink } from 'react-router-dom';
import { ReactComponent as Color } from 'assets/img/icons/Color-Selected.svg';
import { Button } from 'components/UI/Buttons';
import { ButtonType } from 'types';
import styles from './ItemCardPage.module.scss';

export const ItemCardPage = () => {
  return (
    <div className={styles.card_page}>
      <h1 className={styles.title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
      <div className={styles.container_top}>
        <div className={styles.photos}>
          <img
            className={styles.photos__main}
            // eslint-disable-next-line max-len
            src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_white_0_4.jpg/w_600"
            alt="Apple iPhone 11 Pro Max 64GB Gold"
          />
          <div className={styles.photos__carousel}>
            <img
              className={styles.photos__carousel_item}
              // eslint-disable-next-line max-len
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_white_0_4.jpg/w_600"
              alt="Apple iPhone 11 Pro Max 64GB Gold"
            />
            <img
              className={styles.photos__carousel_item}
              // eslint-disable-next-line max-len
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_white_0_4.jpg/w_600"
              alt="Apple iPhone 11 Pro Max 64GB Gold"
            />
            <img
              className={styles.photos__carousel_item}
              // eslint-disable-next-line max-len
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_white_0_4.jpg/w_600"
              alt="Apple iPhone 11 Pro Max 64GB Gold"
            />
            <img
              className={styles.photos__carousel_item}
              // eslint-disable-next-line max-len
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_white_0_4.jpg/w_600"
              alt="Apple iPhone 11 Pro Max 64GB Gold"
            />
            <img
              className={styles.photos__carousel_item}
              // eslint-disable-next-line max-len
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/a/p/apple_iphone_11_64gb_white_0_4.jpg/w_600"
              alt="Apple iPhone 11 Pro Max 64GB Gold"
            />
          </div>
        </div>
        <section className={styles.params}>
          <div className={styles.colors}>
            <div className={styles.info}>
              <span>Available colors</span>
              <span className={styles.info__code}>ID: 802390</span>
            </div>
            <div className={styles.group_colors}>
              <a href="/" className={styles.group_colors__link}>
                <Color />
              </a>
              <a href="/" className={styles.group_colors__link}>
                <Color />
              </a>
              <a href="/" className={styles.group_colors__link}>
                <Color />
              </a>
            </div>
          </div>
          <div className={styles.capacity}>
            <span className={styles.info}>Select capacity</span>
            <NavLink className={styles.capacity__option} to="/">
              64 GB
            </NavLink>
            <NavLink
              className={styles.capacity__option}
              to="/"
            >
              256 GB
            </NavLink>
            <NavLink className={styles.capacity__option} to="/">
              512 GB
            </NavLink>
          </div>
          <div className={styles.price}>
            <span className={styles.price__discount}>$799</span>
            <span className={styles.price__full}>$1199</span>
          </div>

          <div className={styles.buttons}>
            <Button
              btnType={ButtonType.Main}
              // isActive={isAddedToCart}
              // onClick={toggleItemToCart}
            />
            <div>
              <Button
                btnType={ButtonType.Favourite}
              />
            </div>
          </div>
          <div className={styles.data}>
            <p className={styles.info}>
              <span>Screen</span>
              <span className={styles.values}>6.5” OLED</span>
            </p>
            <p className={styles.info}>
              <span>Resolution</span>
              <span className={styles.values}>2688x1242</span>
            </p>
            <p className={styles.info}>
              <span>Processor</span>
              <span className={styles.values}>Apple A12 Bionic</span>
            </p>
            <p className={styles.info}>
              <span>RAM</span>
              <span className={styles.values}>3 GB</span>
            </p>
          </div>
        </section>
      </div>

      <div className={styles.container_bottom}>
        <section className={styles.about}>
          <span className={styles.about__title}>About</span>
          <p className={styles.about__header}>
            And then there was Pro
          </p>
          <p className={styles.about__content}>
            A transformative triple‑camera system that adds tons of capability
            without complexity.
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to
            be called Pro.
          </p>

          <p className={styles.about__header}>
            Camera
          </p>
          <p className={styles.about__content}>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture
            up to four times more scene. Get beautiful images in
            drastically lower light. Shoot the highest‑quality video
            in a smartphone — then edit with the same tools you love
            for photos. You’ve never shot with anything like it.
          </p>

          <p className={styles.about__header}>
            Shoot it. Flip it. Zoom it. Crop it. Cut it.
            Light it. Tweak it. Love it.
          </p>
          <p className={styles.about__content}>
            iPhone 11 Pro lets you capture videos that are beautifully
            true to life, with greater detail and smoother motion.
            Epic processing power means it can shoot 4K video with
            extended dynamic range and cinematic video stabilization —
            all at 60 fps. You get more creative control, too, with
            four times more scene and powerful new editing tools
            to play with.
          </p>
        </section>

        <section className={styles.technology}>
          <span className={styles.technology__title}>Tech specs</span>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Screen</span>
            <span className={styles.technology__value}>6.5” OLED</span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Resolution</span>
            <span className={styles.technology__value}>2688x1242</span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Processor</span>
            <span className={styles.technology__value}>Apple A12 Bionic</span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>RAM</span>
            <span className={styles.technology__value}>3 GB</span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Built in memory</span>
            <span className={styles.technology__value}>64 GB</span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Camera</span>
            <span className={styles.technology__value}>
              12 Mp + 12 Mp + 12 Mp (Triple)
            </span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Zoom</span>
            <span className={styles.technology__value}>
              Optical, 2x
            </span>
          </p>
          <p className={styles.technology__info}>
            <span className={styles.technology__key}>Cell</span>
            <span className={styles.technology__value}>
              GSM, LTE, UMTS
            </span>
          </p>
        </section>
      </div>
    </div>

  );
};

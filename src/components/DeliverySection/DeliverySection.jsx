import React from 'react'
import * as s from "./DeliverySection.module.scss"
import icon1 from "../../images/delivery_section/Group_1.png"
import icon2 from "../../images/delivery_section/Group_2.png";
import icon3 from "../../images/delivery_section/Group_3.png";

function DeliverySection() {
  return (
    <section className={s.delivery__section}>
      <div className="container">
        <div className={s.delivery__section__header}>
          <h4 className={s.delivery__section__header__sub__title}>
            What we Serve
          </h4>
          <h2 className={s.delivery__section__header__title}>
            fruit and vegetable delivered to your home
          </h2>
        </div>
        <div className={s.delivery__section__cards}>
          <div className={s.delivery__section__card}>
            <div className={s.delivery__section__card__content}>
              <div className={s.delivery__section__card__content__icon}>
                <img
                  className={s.delivery__section__card__content__icon__img}
                  src={icon1}
                  alt="car icon"
                />
              </div>
              <h3 className={s.delivery__section__card__content__title}>
                Free shipping
              </h3>
              <p className={s.delivery__section__card__content__description}>
                Enjoy Order in a hand using the fresness of groceries
              </p>
            </div>
          </div>

          <div className={s.delivery__section__card}>
            <div className={s.delivery__section__card__img}></div>
            <div className={s.delivery__section__card__content}>
              <div className={s.delivery__section__card__content__icon}>
                <img
                  className={s.delivery__section__card__content__icon__img}
                  src={icon2}
                  alt="car icon"
                />
              </div>
              <h3 className={s.delivery__section__card__content__title}>
                Free shipping
              </h3>
              <p className={s.delivery__section__card__content__description}>
                Enjoy Order in a hand using the fresness of groceries
              </p>
            </div>
          </div>

          <div className={s.delivery__section__card}>
            <div className={s.delivery__section__card__content}>
              <div className={s.delivery__section__card__content__icon}>
                <img
                  className={s.delivery__section__card__content__icon__img}
                  src={icon3}
                  alt="car icon"
                />
              </div>
              <h3 className={s.delivery__section__card__content__title}>
                Free shipping
              </h3>
              <p className={s.delivery__section__card__content__description}>
                Enjoy Order in a hand using the fresness of groceries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection
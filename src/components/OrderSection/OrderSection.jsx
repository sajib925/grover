import React from 'react'
import * as s from './OrderSection.module.scss'
import Button from './../Button/Button';
import img from "../../images/order_section/image.png"
import cardImg from "../../images/order_section/icon.png"
import icon from "../../images/order_section/Ellipse 2701.svg"

function OrderSection() {
  return (
    <section className={s.order__section}>
      <div className="container">
        <div className="row">
          <div className={s.order__section__col}>
            <div className={s.order__section__left}>
              <h4 className={s.order__section__left__sub__title}>
                HOME DELIVERY
              </h4>
              <h2 className={s.order__section__left__title}>
                Sit at Home We Will Take Care Your Order
              </h2>
              <p className={s.order__section__left__description}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
              </p>
              <div className={s.order__section__left__btn}>
                <Button url="/" variant="outline" text="Explore Now" />
              </div>
            </div>
          </div>
          <div className={s.order__section__col}>
            <div className={s.order__section__right}>
              <div className={s.order__section__right__thumbnail}>
                <img
                  src={img}
                  alt="img"
                  className={s.order__section__right__thumbnail__img}
                />
                <img className={s.order__section__right__thumbnail__icon} src={icon} alt="icon" />
              </div>
              <div className={s.order__section__card}>
                <div className={s.order__section__card__content}>
                  <div className={s.order__section__card__content__thumbnail}>
                    <img
                      src={cardImg}
                      alt="bike img"
                      className={
                        s.order__section__card__content__thumbnail__img
                      }
                    />
                  </div>
                  <h6 className={s.order__section__card__content__title}>
                    Bike Delivery
                  </h6>
                  <p className={s.order__section__card__content__description}>
                    Bicycle service ensures that your packages arrive quickly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSection
import React from "react";
import * as s from "./HeroSection.module.scss";
import img1 from "../../images/hero/fruits.png";
import heroImg from "../../images/hero/image1.png";
import orange from "../../images/hero/image_2.svg";
import clockImg from "../../images/hero/alarm-clock-icon.svg"
import icon from "../../images/hero/abstract.png";
import Button from "./../Button/Button";
import {MdPlayArrow} from "react-icons/md";
import {BsFillCartPlusFill} from "react-icons/bs"

function HeroSection() {
  return (
    <section className={s.hero__section}>
      <div className="container">
        <div className={s.hero__section__row}>
          <div className={s.hero__section__row__col}>
            <div className={s.hero__section__left}>
              <div className={s.hero__section__left__sm__header}>
                <span className={s.hero__section__left__sm__header__title}>
                  More than Faster
                </span>
                <img
                  className={s.hero__section__left__sm__header__img}
                  src={img1}
                  alt="fruits"
                />
              </div>
              <h1 className={s.hero__section__left__title}>
                Groceries delivered in as little as{" "}
                <span className={s.hero__section__left__title__color}>
                  2 hours
                </span>
              </h1>
              <p className={s.hero__section__left__description}>
                Grocen atssures fresh grocery every morning to your family
                without getting out in this pandemic.
              </p>
              <div className={s.hero__section__left__btn}>
                <Button url="/" text="Order Now" />
                <div className={s.hero__section__left__btn__links}>
                  <a
                    className={s.hero__section__left__btn__links__video__icon}
                    href="/"
                  >
                    <MdPlayArrow
                    size={30}
                      className={
                        s.hero__section__left__btn__links__video__icon__svg
                      }
                    />
                  </a>
                  <a
                    className={s.hero__section__left__btn__links__link}
                    href="/"
                  >
                    Order Process
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={s.hero__section__row__col}>
            <div className={s.hero__section__right}>
              <div className={s.hero__section__right__thumbnail}>
                <img
                  className={s.hero__section__right__thumbnail__img}
                  src={heroImg}
                  alt="hero img"
                />
                <img
                  className={s.hero__section__right__thumbnail__icon}
                  src={icon}
                  alt="icon"
                />
              </div>

              <div className={s.hero__section__orange__card}>
                <div className={s.hero__section__orange__card__content}>
                  <div
                    className={
                      s.hero__section__orange__card__content__thumbnail
                    }
                  >
                    <img src={orange} alt="orange" />
                  </div>

                  <span
                    className={
                      s.hero__section__orange__card__content__sm__title
                    }
                  >
                    Fresh Orenge
                  </span>
                  <h4 className={s.hero__section__orange__card__content__title}>
                    $44.60
                  </h4>
                  <span
                    className={s.hero__section__orange__card__content__meta}
                  >
                    Free Shipping
                  </span>
                </div>
                <div className={s.hero__section__orange__card__cart__icon}>
                  <BsFillCartPlusFill />
                </div>
              </div>

              <div className={s.hero__section__delivery__card}>
                <div className={s.hero__section__delivery__card__content}>
                  <img
                    src={clockImg}
                    alt="clock img"
                    className={s.hero__section__delivery__card__content__img}
                  />
                  <div
                    className={s.hero__section__delivery__card__content__text}
                  >
                    <h4
                      className={
                        s.hero__section__delivery__card__content__text__title
                      }
                    >
                      Delivary
                    </h4>
                    <p
                      className={
                        s.hero__section__delivery__card__content__text__time
                      }
                    >
                      30 Min
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

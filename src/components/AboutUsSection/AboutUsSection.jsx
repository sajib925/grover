import React from 'react'
import * as s from "./AboutUsSection.module.scss"
import img from "../../images/about_us/image.png"
import Button from './../Button/Button';
import fruitImg from "../../images/about_us/fruit-removebg-preview.png"
import {AiFillStar} from "react-icons/ai"
import {HiPlusSm} from "react-icons/hi"


function AboutUsSection() {
  return (
    <section className={s.about__us__section}>
      <div className="container">
        <div className="row">
          <div className={s.about__us__section__col}>
            <div className={s.about__us__section__left}>
              <div className={s.about__us__section__left__thumbnail}>
                <img
                  className={s.about__us__section__left__thumbnail__img}
                  src={img}
                  alt="img"
                />
              </div>
              <div className={s.about__us__section__card}>
                <div className={s.about__us__section__card__content}>
                  <h4 className={s.about__us__section__card__content__title}>
                    Melting Cheese
                  </h4>
                  <div className={s.about__us__section__card__content__meta}>
                    Red Stovery
                  </div>
                  <img
                    className={s.about__us__section__card__content__img}
                    src={fruitImg}
                    alt="fruit"
                  />
                  <div className={s.about__us__section__card__content__rating}>
                    <AiFillStar color="#FDC55E" />
                    <span>3.8</span>
                  </div>
                  <div className={s.about__us__section__card__content__price}>
                    <h5
                      className={
                        s.about__us__section__card__content__price__title
                      }
                    >
                      $49.66
                    </h5>
                    <div
                      className={
                        s.about__us__section__card__content__price__icon
                      }
                    >
                      <HiPlusSm size={28} color="#FFFFFF" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.about__us__section__col}>
            <div className={s.about__us__section__right}>
              <h4 className={s.about__us__section__right__sub__title}>
                WHY CHOOSE US
              </h4>
              <h2 className={s.about__us__section__right__title}>
                Find Favorites and Discover New Ones
              </h2>
              <p className={s.about__us__section__right__description}>
                At vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesen voluptatum deleniti.
              </p>
              <div className={s.about__us__section__right__btn}>
                <Button url="/" text="Explore Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection
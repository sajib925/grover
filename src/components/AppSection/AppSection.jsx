import React from 'react'
import * as s from "./AppSection.module.scss"
import mobileImg from "../../images/app_section/mobile mockup.png"
import icon1 from "../../images/app_section/icon.svg"
import icon2 from "../../images/app_section/icon2.svg";

function AppSection() {
  return (
    <section className={s.app__section}>
      <div className="container">
        <div className="row">
          <div className={s.app__section__col}>
            <div className={s.app__section__left}>
              <div className={s.app__section__left__thumbnail}>
                <img
                  src={mobileImg}
                  alt="img"
                  className={s.app__section__left__thumbnail__img}
                />
              </div>
            </div>
          </div>

          <div className={s.app__section__col}>
            <div className={s.app__section__right}>
              <h4 className={s.app__section__right__sub__title}>
                Download our app
              </h4>
              <h2 className={s.app__section__right__title}>
                Get the Groceries app order more easily.
              </h2>
              <p className={s.app__section__right__description}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
              </p>
              <div className={s.app__section__right__btn}>
                <button className={s.app__section__right__btn__button}>
                  <img
                    src={icon1}
                    alt="apple icon"
                    className={s.app__section__right__btn__button__icon}
                  />
                  <span className={s.app__section__right__btn__button__text}>
                    App Store
                  </span>
                </button>
                <button className={s.app__section__right__btn__button}>
                  <img
                    src={icon2}
                    alt="apple icon"
                    className={s.app__section__right__btn__button__icon}
                  />
                  <span className={s.app__section__right__btn__button__text}>
                    Play Store
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSection
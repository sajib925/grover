import React from 'react'
import * as s from "./Footer.module.scss"
import logo from "../../images/logo/logo.svg"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={s.footer__section}>
      <div className="container">
        <div className="row">
          <div className={s.footer__section__col}>
            <div className={s.footer__section__col__content}>
              <div className={s.footer__section__col__content__logo}>
                <img src={logo} alt="logo" />
              </div>
              <p className={s.footer__section__col__content__description}>
                Fast delivery, which is active all over the world, serves with
                many transportation vehicles.
              </p>
            </div>
          </div>

          <div className={`${s.footer__section__col} ${s.footer__align}`}>
            <div className={s.footer__section__col__content}>
              <h4 className={s.footer__section__col__content__title}>
                Company
              </h4>
              <div className={s.footer__section__col__content__links}>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  About Us
                </Link>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  Blog
                </Link>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  All Products
                </Link>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  Locations Map
                </Link>
              </div>
            </div>
          </div>

          <div className={`${s.footer__section__col} ${s.footer__align}`}>
            <div className={s.footer__section__col__content}>
              <h4 className={s.footer__section__col__content__title}>
                Services
              </h4>
              <div className={s.footer__section__col__content__links}>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  Order tracking
                </Link>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  Wish List
                </Link>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  My account
                </Link>
                <Link
                  className={s.footer__section__col__content__links__link}
                  to="/"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          <div className={`${s.footer__section__col} ${s.footer__align}`}>
            <div className={s.footer__section__col__content}>
              <h4 className={s.footer__section__col__content__title}>
                Get in Touch
              </h4>
              <p className={s.footer__section__col__content__para}>
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
            </div>
          </div>
        </div>
        <div className={s.footer__section__bottom}>
          <p className={s.footer__section__bottom__description}>
            All Rights Reserved @ BESNIK 2021
          </p>
          <div className={s.footer__section__bottom__links}>
            <a href="/" className={s.footer__section__bottom__links__link}>
              Terms & Conditions
            </a>
            <a href="/" className={s.footer__section__bottom__links__link}>
              Privacy & Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
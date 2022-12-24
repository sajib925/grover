import React, {useState} from "react";
import * as s from "./Header.module.scss";
import logo from "../../images/logo/logo.svg";
import {IoSearchOutline} from "react-icons/io5";
import icon from "../../images/header/Group 1000002450.svg";
import {VscThreeBars} from "react-icons/vsc";
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import {ImSearch} from "react-icons/im";


function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
  };
  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.header__nav}>
          <div className={s.header__nav__left}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div
            className={
              mobileMenu
                ? `${s.header__nav__middle} ${s.open}`
                : `${s.header__nav__middle} ${s.close}`
            }
          >
            <div className={s.close__icon} onClick={handleMobileMenu}>
              <IoMdClose size={30} />
            </div>
            <ul className={s.header__nav__middle__links}>
              <li className={s.header__nav__middle__links__item}>
                <Link
                  to="/"
                  className={s.header__nav__middle__links__item__link}
                >
                  Home
                </Link>
              </li>
              <li className={s.header__nav__middle__links__item}>
                <Link
                  to="/Menu"
                  className={s.header__nav__middle__links__item__link}
                >
                  Menu
                </Link>
              </li>
              <li className={s.header__nav__middle__links__item}>
                <Link
                  to="/Services"
                  className={s.header__nav__middle__links__item__link}
                >
                  Services
                </Link>
              </li>
              <li className={s.header__nav__middle__links__item}>
                <Link
                  to="/Shop"
                  className={s.header__nav__middle__links__item__link}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.header__nav__right}>
            <div className={s.header__nav__right__search}>
              <input
                className={s.header__nav__right__search__input}
                type="text"
                placeholder="Search"
              />
              <IoSearchOutline className={s.header__nav__right__search__icon} />
            </div>
            <div className={s.header__nav__right__icon}>
              <img
                className={s.header__nav__right__icon__cart}
                src={icon}
                alt="cart icon"
              />
              <span className={s.header__nav__right__icon__badge}>2</span>
            </div>
          </div>
          <div className={s.header__nav__mobile__search}>
            <ImSearch className={s.header__nav__mobile__search__icon} />
          </div>
          <div className={s.header__nav__mobile__cart}>
            <img src={icon} alt="cart icon" className={s.header__nav__mobile__cart__icon}/>
          </div>
          <div
            className={s.header__nav__mobile__btn}
            onClick={handleMobileMenu}
          >
            <VscThreeBars size={30} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

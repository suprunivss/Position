import { useState } from 'react';
import ButtonMenu from '../../molecules/ButtonMenu/ButtonMenu';
import Logo from '../../molecules/Logo/Logo';
import cn from 'classnames';

import s from './Header.module.scss';
import Button from '../../molecules/Button/Button';
import { Registration, SignIn } from '../../molecules/Icons/Icons';

const Header = () => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div className={cn(s.ctx, activeTab ? s.active : null)}>
      <Logo/>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <a className={s.list__link} href="#">Как работает</a>
          </li>
          <li>
            <a className={s.list__link} href="#">Тарифы</a>
          </li>
          <li>
            <a className={s.list__link} href="#">Интерфейс</a>
          </li>
        </ul>
      </nav>
      <div className={s.login}>
        <Button>
          <SignIn/>
          <span>Вход</span>
        </Button>
        <Button>
          <Registration/>
          <span>Регистрация</span>
        </Button>
      </div>
      <ButtonMenu onClick={() => setActiveTab(!activeTab)} active={activeTab}/>
      <div className={cn(s.modal, activeTab ? null : s.modal__hide)}>
        <div className={s.modal__login}>
          <p className={s.modal__title}>Личный кабинет</p>
          <div className={s.modal__buttons}>
            <Button color='blue'>
              <Registration/>
              <span>Регистрация</span>
            </Button>
            <Button color='orange'>
              <SignIn/>
              <span>Вход</span>
            </Button>
          </div>
        </div>
        <nav>
          <ul className={cn(s.list, s.list__mobile)}>
            <li>
              <a className={s.list__link} href="#">Как работает</a>
            </li>
            <li>
              <a className={s.list__link} href="#">Тарифы</a>
            </li>
            <li>
              <a className={s.list__link} href="#">Интерфейс</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
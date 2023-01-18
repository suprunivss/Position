import s from './Logo.module.scss';
import {MainLogo} from '../Icons/Icons';

const Logo = () => {
  return (
    <div className={s.ctx}>
      <MainLogo/>
    </div>
  );
};

export default Logo;
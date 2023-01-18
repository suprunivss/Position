import s from './ButtonMenu.module.scss';
import cn from 'classnames';

const ButtonMenu = ({active, onClick}) => {
  return (
    <button onClick={onClick && onClick} className={s.ctx}>
      <div className={cn(s.button, active ? s.button__active : null)}/>
    </button>
  );
};

export default ButtonMenu;
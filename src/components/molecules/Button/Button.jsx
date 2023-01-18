import s from './Button.module.scss';
import cn from 'classnames';

const Button = ({ children, color }) => {
  return (
    <button className={cn(s.ctx, s[color])}>
      {children}
    </button>
  );
};

export default Button;
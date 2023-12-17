import { Logo } from '../../components/ui/icons/Logo';
import styles from './AuthLayout.module.css';

export const AuthLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <h1>Telegram</h1>
      {children}
    </div>
  );
};

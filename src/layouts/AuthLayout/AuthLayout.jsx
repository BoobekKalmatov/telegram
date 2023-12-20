import { Navigate, Outlet } from 'react-router-dom';
import { Logo } from '../../components/ui/icons/Logo';
import styles from './AuthLayout.module.css';

export const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <div className={styles.wrapper}>
      <Logo />
      <h1>Telegram</h1>
      {!isAuthenticated ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
};

import { Login } from '../components/Login/Login';
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

import { useForm } from 'react-hook-form';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import styles from './Login.module.css';

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        name="email"
        {...register('email', { required: true })}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        {...register('password', { required: true })}
      />
      <Input type="checkbox" name="remember" label="Remember me" />
      <Button type="submit">Login</Button>
    </form>
  );
};

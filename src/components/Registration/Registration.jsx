import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import { useForm } from 'react-hook-form';
import styles from './Registration.module.css';

export const Registration = () => {
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
        label="Name"
        name="name"
        {...register('name', { required: true })}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        {...register('password', { required: true })}
      />
      <Button type="submit">Registration</Button>
    </form>
  );
};

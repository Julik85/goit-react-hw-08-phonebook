import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <lable className={css.lable}>
        Email
        <input
          className={css.lable}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </lable>
      <lable className={css.lable}>
        Password
        <input
          className={css.lable}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </lable>
      <button className={css.formBtn} type="submit">
        Log In
      </button>
      <div></div>
    </form>
  );
};

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/reducers';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.authState.isAuthenticated);

  const loginHandler = () => dispatch(authActions.login());

  const handleSubmit = (event) => event.preventDefault();

  const loginRender = () => (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={ loginHandler }>Login</button>
        </form>
      </section>
    </main>
  );

  return (
    !auth ? loginRender() : null
  );
};

export default Auth;

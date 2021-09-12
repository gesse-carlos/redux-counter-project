import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/reducers';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.authState.isAuthenticated);

  const logoutHandler = () => dispatch(authActions.logout());

  const headerRender = () => (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={ logoutHandler }>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );

  return (
    auth ? headerRender() : null
  );
};

export default Header;

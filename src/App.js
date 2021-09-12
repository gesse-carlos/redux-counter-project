import { Fragment } from 'react';
import { Counter, Auth, Header, UserProfile } from './components';

function App() {
  return (
    <Fragment>
      <Header />
      <UserProfile />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;

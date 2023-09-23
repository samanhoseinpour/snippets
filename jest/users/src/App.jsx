import { useState } from 'react';

import { UserForm, UserShow } from './components/index';

const App = () => {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <UserShow users={users} />
    </>
  );
};

export default App;

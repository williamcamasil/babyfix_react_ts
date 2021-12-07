import { Route, Switch } from 'react-router-dom';
import List from './List';
import Register from './Register';

const BoxRegisterList = () => {
  return (
    <>
      <Switch>
        <Route path="/manutencao/registrar">
          <Register />
        </Route>
        <Route path="/manutencao/lista">
          <List />
        </Route>
      </Switch>
    </>
  );
};

export default BoxRegisterList;

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './screens/Home';
import RegisterListMaintenance from './screens/Maintenance';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/manutencao/registrar" exact>
          <RegisterListMaintenance />
        </Route>

        <Route path="/manutencao/lista" exact>
          <RegisterListMaintenance />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

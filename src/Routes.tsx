import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './screens/Home';
import RegisterListVehicles from './screens/RegisterListVehicles';
import RegisterListMaintenance from './screens/RegisterListMaintenance';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/veiculos" exact>
          <RegisterListVehicles />
        </Route>

        <Route path="/manutencao" exact>
          <RegisterListMaintenance />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

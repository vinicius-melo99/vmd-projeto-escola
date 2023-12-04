import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login.jsx';
import NotFound from '../pages/NotFound/NotFound.jsx';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";
import Users from './user/pages/Users';
import NewUser from './places/pages/New-User';
import MainNavigation from './shared/Navigation/MainNavigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';



function App() {



  return <>
    <MainNavigation />
    <main>
      <Switch>
        <Route exact path="/"  > <h1>hola</h1> </Route>
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/new" component={NewUser} />
        <Route exact path="/:userId/places" component={UserPlaces} />
        <Redirect to="/" />
      </Switch>
    </main>
  </>
}

export default App;

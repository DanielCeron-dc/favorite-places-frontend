import './App.css';
import { Route} from "react-router-dom";


import MainNavigation from './shared/Navigation/MainNavigation/MainNavigation';
import Users from './user/pages/Users';
import NewUser from './places/pages/New-User';
import UserPlaces from './places/pages/UserPlaces';
import AddPlace from './places/pages/AddPlace';
import AuthPage from './Auth/AuthPage/AuthPage';
import { AnimatePresence, motion } from 'framer-motion';
import PrivateRoute from './Auth/PrivateRoute';



function App() {

  return <div className="App">
    <AnimatePresence>
      <Route exact path="/"  >
        <Page> <h1>hola</h1> </Page>
      </Route>

      <Route exact path="/users" >
        <Page> <Users /> </Page>
      </Route>

      <PrivateRoute exact path="/users/new" >
        <Page> <NewUser /> </Page>
      </PrivateRoute>

      <PrivateRoute path="/:userId/places/new" >
        <Page> <AddPlace /> </Page>
      </PrivateRoute>

      <Route path="/:userId/places" >
        <Page> <UserPlaces /></Page>
      </Route>

      <Route path="/auth" >
        <Page transparentMain><AuthPage /></Page>
      </Route>
    </AnimatePresence>
  </div>
}

const Page: React.FC<{transparentMain?: boolean}> = (props) => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{height: '100vh'}}
  >

    {props.transparentMain ?
      <>
        <MainNavigation style={{ backgroundColor: 'rgba(0,0,0,0)' }} />
        {props.children}
      </> :
      <>
        <MainNavigation />
        <main>
          {props.children}
        </main>
      </>
    }
    
  </motion.div>
}

export default App;

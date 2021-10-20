import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Student from './components/pages/Student';
import Attendance from './components/pages/Attendance';
import Module from './components/pages/Module';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <Layout>
      <Switch> 
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/student'>
          <Student />
        </Route>
        <Route path='/attendance'>
          <Attendance />
        </Route>
        <Route path='/module'>
          <Module />
        </Route>
        <Route path='/ContactUS'>
          <ContactUs />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Student from './pages/Student';
import Attendance from './pages/Attendance';
import Main from './layout/Main';


function App() {
  return (
    <div>
      <Main />
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
      </Switch>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { apiRequestWithKey } from '../api/apiRequestWithKey';
import Modules from '../pages/Mymodule';

const API_URL = 'https://my.api.mockaroo.com/';
const API_KEY = '?key=bb6adbc0';

function Module() {
  // Hooks ---------------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [Modules, setModules] = useState(null);

  useEffect(() => { fetchModules(); }, []);

  // Methods -------------------------------------
  const fetchModules = async () => {
    const outcome = await apiRequestWithKey(API_URL,API_KEY,'Modules');
    if (outcome.success) setModules(outcome.response);
    else setLoadingMessage("Modules could not be found.");
  }

  // View ----------------------------------------
  return (
    <section>
      <h1>All Modules</h1>
      { 
         !Modules 
            ? <p>{loadingMessage}</p>
            : <Modules list={Modules} />
      }
    </section>
  );
}


export default Module;
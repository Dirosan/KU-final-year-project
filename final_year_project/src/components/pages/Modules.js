import { useState, useEffect } from 'react';
import { apiRequestWithKey } from '../api/apiRequestWithKey';

const API_URL = 'https://my.api.mockaroo.com/';
const API_KEY = '?key=bb6adbc0';

function Module() {
  // Hooks ---------------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [Modules, setModules] = useState([]);

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
      <table>
      <h1>All Modules</h1>
      {
        Modules.map((project) =>(
          <tr>
            <td>{project.ModuleID}</td>
            <td>{project.ModuleName}</td>
            <td>{project.ModuleCode}</td>
            <td>{project.ModuleLevel}</td>
            <td>{project.ModuleLeaderID}</td>
            <td><img src={project.ModuleImage}/></td>
          </tr>
        ))
      }
      </table>
    </section>
  );
}


export default Module;
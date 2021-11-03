import { Panel, StaticPanel } from '../generic/Panel';

function Module() {
    const StutyingModule = [
        {
            Title: "Individual Project",
            Code: "CI6600",
            Studying: [
                { Activity: "Lecture",  Percentage:  "40%", Hours:  20, Attendance: 100},
                { Activity: "Workshops",  Percentage: "100%", Hours:  30, Attendance: 100 },
                { Activity: "Assessment", Percentage:  "40%", Hours: 130, Attendance: 100 }
            ]
        },
        {
            Title: "Advanced Data Modelling",
            Code: "CI6230",
            Studying: [
                { Activity: "Lecture",  Percentage:  "40%", Hours:  20, Attendance: 100 },
                { Activity: "Workshops",  Percentage: "100%", Hours:  30, Attendance: 100 },
                { Activity: "Assessment", Percentage:  "40%", Hours: 130, Attendance: 100 }
            ]
        },
        {
            Title: "Mobile Application Development",
            Code: "CI6330",
            Studying: [
                { Activity: "Lecture",  Percentage:  "40%", Hours:  20, Attendance: 100 },
                { Activity: "Workshops",  Percentage: "100%", Hours:  30, Attendance: 100 },
                { Activity: "Assessment", Percentage:  "40%", Hours: 130, Attendance: 100 }
            ]
        },
        {
            Title: "Software Development Practice",
            Code: "CI6250",
            Studying: [
                { Activity: "Lecture",  Percentage:  "40%", Hours:  20, Attendance: 100 },
                { Activity: "Workshops",  Percentage: "100%", Hours:  30, Attendance: 100 },
                { Activity: "Assessment", Percentage:  "40%", Hours: 130, Attendance: 100 }
            ]
        },
    ];


const computeTotalOfModuleHours = ((moduleObj) => {
    return moduleObj.Studying.reduce((total, activity) => total + activity.Hours, 0);
  });
  
  
  return (
    <section>
      {/* <h1>Module</h1> */}
      <div className="PanelContainer">

        <Panel title="Module Studying" level="1" initialState="1">
          {
            StutyingModule.map((moduleObj) => {
              return (
                <Panel
                  key={moduleObj.Code}
                  title={moduleObj.Title + " (" + moduleObj.Code + ")"}
                  level="2"
                  initialState="1"
                >
                  <StaticPanel level="3">
                    <table>
                      <tr>
                        <th className="AlignColLeft">Activity</th>
                        <th className="AlignColCenter">Percentage</th>
                        <th className="AlignColRight">Hours</th>
                        <th className="AlignColRight">Attendance</th> 
                      </tr>
                      {
                        moduleObj.Studying.map((activityObj) => {
                          return (
                            <tr>
                              <td className="AlignColLeft">  {activityObj.Activity}  </td>
                              <td className="AlignColCenter">{activityObj.Percentage}</td>
                              <td className="AlignColRight"> {activityObj.Hours}     </td>
                              <td className="AlignColRight"> {activityObj.Attendance}     </td>
                            </tr>
                          );
                        })
                      }
                      <tr>
                        <td className="AlignColLeft">Total</td>
                        <td className="AlignColCenter">&nbsp;</td>
                        <td className="AlignColRight">{ computeTotalOfModuleHours(moduleObj) }</td>
                      </tr>
                    </table>
                  </StaticPanel>
                </Panel>
              );
            })
          }
        </Panel>
      </div>
    </section>
  );
}

export default Module;
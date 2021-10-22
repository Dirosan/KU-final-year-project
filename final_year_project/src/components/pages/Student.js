import layoutStudent from './Student.module.css';

function Student() {
    return (
        <section>
        {/* <h1>Student Detail</h1> */}
        <table className={layoutStudent.table}>
            <thead>
                <tr>
                    <th>K Number</th>
                    <th>Full Name</th>
                    <th>Course</th>
                    <th>Module</th>
                    <th>Year</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>K1914569</td>
                    <td>Dirosan Sivarajah</td>
                    <td>BSc (Hons) Computer Science</td>
                    <td>Final Year Project<br />
                        Advanced Data Modelling <br />
                        Mobile Application Development <br />
                        Software Development Practice</td>
                    <td>Level 6</td>
                    <td>100%</td>
                </tr>
            </tbody>
        </table>
    </section>



    );
}

export default Student;
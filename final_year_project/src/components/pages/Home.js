import layoutHome from './Home.scss';

function Home() {
    return (
    <section>
        <div>
            <img className={layoutHome.image} src="https://cdn-icons-png.flaticon.com/512/194/194931.png" alt=""></img>     
        </div>
        <table className={layoutHome.table}>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>K Number</th>
                    <th>Course</th>
                    <th>Level</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dirosan Sivarajah</td>
                    <td>K1914569</td>
                    <td>BSc (Hons) Computer Science</td>
                    <td>Level 6</td>
                    <td>100%</td>
                </tr>
            </tbody>
        </table>  
            
        <br />

        {/* <img className={layoutHome.image} src="https://cdn-icons-png.flaticon.com/512/194/194931.png" alt="new"/> */}

        </section>




    );
}

export default Home;
import layoutHome from './Home.module.css';

function Home() {
    return (
    <section>
        <table className={layoutHome.table}>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dirosan Sivarajah</td>
                    <td>BSc (Hons) Computer Science</td>
                </tr>
            </tbody>
        </table>  
            
        <br />

        <img className={layoutHome.image} src="https://cdn-icons-png.flaticon.com/512/194/194931.png" alt="new"/>

        </section>




    );
}

export default Home;
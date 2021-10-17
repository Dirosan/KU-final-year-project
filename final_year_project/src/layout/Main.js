import { Link } from 'react-router-dom';

import layout from './Main.module.css';

function Main() {
    return (
    <header className={layout.header}>
        <div className={layout.logo}>Kingston University</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/student'>Student</Link>
                </li>
                <li>
                    <Link to='/attendance'>Attendance</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Main;
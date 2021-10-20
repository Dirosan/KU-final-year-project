import { Link } from 'react-router-dom';

import navbar from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={navbar.Navbar}>
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
                <li>
                    <Link to='/module'>Module</Link>
                </li>
                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
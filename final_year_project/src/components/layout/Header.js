import layoutheader from './Header.module.css';

function Header() {
    return (
    <header className={layoutheader.header}>
        <div className={layoutheader.logo}>Kingston University</div>
        <button className={layoutheader.login}>Login</button>
        <button className={layoutheader.login}>Sign Up</button>
    </header>
    );
}

export default Header;
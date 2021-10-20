import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import Layoutholder from './Layout.module.css';

function Layout(props) {
    return (
    <>
        <Header />
        <Navbar />
        <div className={Layoutholder.div}>
            {props.children}
        </div>
        <Footer />
    </>
    );
}

export default Layout;
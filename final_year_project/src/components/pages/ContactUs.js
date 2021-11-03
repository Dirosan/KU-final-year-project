import { Panel } from '../generic/Panel';
import './ContactUs.scss';

function ContactUs() {
    return (
        <section> 
            {/* <h1>Contact Us</h1> */}
            <Panel title="Contact Details" level="1" initialState="0">
                <table>
                    <tr><td colspan="2">Dirosan Sivarajah</td></tr>
                    <tr><td>Email</td><td>K1914569@kingston.ac.uk</td></tr>
                </table>
            </Panel>
        </section>
    );
}

export default ContactUs;
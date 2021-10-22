import Modulecard from "./Modulecard";

function Module() {
    
    return (
        <section> 
            <div>
                {/* <h1>Module</h1> */}
                <Modulecard text='Individual Project'/> 
                <br />
                <Modulecard text='Advanced Data Modelling'/>
                <br />
                <Modulecard text='Mobile Application Development'/>
                <br />
                <Modulecard text='Software Development Practice'/>
            </div>
        </section>
    );
}
export default Module;
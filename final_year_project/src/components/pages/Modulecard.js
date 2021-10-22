import Card from './Modulecard.module.css';

function Modulecard(props) {
    function viewHandler() {}
    
    return (
    <div className={Card.card}>
        <h2>{props.text}</h2>
        <div className={Card.action}>
            <button className={Card.btn} onClick={viewHandler}>VIEW</button>
        </div>
    </div>
    )
}

export default Modulecard;
import './Card.css';
import '../Expenses/ExpenseItem.css';
//making a wrapper for the items
function Card(props) {
    const  classes = 'card' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}
export default Card;
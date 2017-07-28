import {Link} from 'react-router-dom';
import Star from 'star/Star';
require('./style.css');

let propTypes = {
    item: PT.object
}
export default function BuyTicketItem(props) {
    let {item} = props;
    return (
        <li>
            <Link to="/">
                <img src={item.images.large} alt=""/>
                <p>{item.title}</p>
                <Star {...{starNum: item.rating.average}}/>
            </Link>
            <Link to="/" className="ticket_btn">选座购票</Link>
        </li>
    )
}
BuyTicketItem.propTypes = propTypes;
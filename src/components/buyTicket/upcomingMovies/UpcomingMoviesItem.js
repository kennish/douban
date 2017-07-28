import {Link} from 'react-router-dom';

let propTypes = {
    item: PT.object,
    large: PT.string,
    title: PT.string,
    year: PT.string
}
export default function UpcomingMoviesItem(props) {
    let {item, item:{images:{large}}, item:{title}, item:{year}} = props;
    return (
        <li>
            <Link to="/">
                <img src={large} alt=""/>
                <p>{title}</p>
                <span>{year}年上映</span>
            </Link>
            <Link to="/" className="ticket_btn">选座购票</Link>
        </li>
    )
}
UpcomingMoviesItem.propTypes = propTypes;
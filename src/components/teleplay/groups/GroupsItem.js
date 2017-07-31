import {Link} from 'react-router-dom';

let propTypes = {
    item: PT.object
}
export default function GroupsItem(props) {
    let {item} = props;
    return (
        <Link to="/">
            <img src={require('img/lb.png')} alt=""/>
            <p>{item.title}</p>
        </Link>
    )
}
GroupsItem.propTypes = propTypes;
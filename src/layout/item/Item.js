import {Link} from 'react-router-dom';

let propTypes = {
    item: PT.object
}
export default function Item(props){
    let {item} = props;
    return (
        <Link to="/" className="item">
            <img src={item.images.large} alt=""/>
            <p className="clear">
                <span className="HotSectiontitle">{item.title}</span>
                <span className="HotSectionaverage">{item.rating.average}</span>
            </p>
        </Link>
    )
}
Item.propTypes = propTypes;
import {Link} from 'react-router-dom';

export default function HotSectionItem(props){
    let {item} = props;
    return (
        <Link to="/">
            <img src={item.images.large} alt=""/>
            <p className="clear">
                <span className="HotSectiontitle">{item.title}</span>
                <span className="HotSectionaverage">{item.rating.average}</span>
            </p>
        </Link>
    )
}
import {Link} from 'react-router-dom';
export default function HotRecommendItem(props) {
    let {item} = props;
    return (
        <li>
            <Link to="/" className="left">
                <img src={item.images.large} alt=""/>
            </Link>
            <div className="right">
                <Link to="/" className="hotR-title">{item.title}</Link>
                <p>权游迷弟客串权游，爱豆迷妹搭戏爱豆</p>
            </div>
        </li>
    )
}
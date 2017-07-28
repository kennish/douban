import {Link} from 'react-router-dom';

export default function HotSectionTitle(props){
    let {children} = props;
    return (
        <div className="hotSection-hd clear">
            <h2 className="fl">最近热门电影
                {children}
            </h2>
            <div className="HotSection-side fr">
                <Link to="/">更多>></Link>
            </div>
        </div>
    )
}
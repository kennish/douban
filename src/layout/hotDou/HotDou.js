import {Link} from 'react-router-dom';
import Subtitle from 'subtitle/Subtitle';
require('./style.css');

export default class HotDou extends React.Component{
    render() {
        return (
            <div className="hotDou">
                <Subtitle>热门豆列</Subtitle>
                <div className="hotDouList">
                    <p>
                        <Link to="/">有些剧让我觉得比有些电影牛逼</Link>
                        <span>469推荐</span>
                    </p>
                    <p>
                        <Link to="/">18+ (非原盘)B</Link>
                        <span>8推荐</span>
                    </p>
                </div>
            </div>
        )
    }
}
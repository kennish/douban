import {Link} from 'react-router-dom';

import BTsubtitle from 'buyTicket/bTsubtitle/BTsubtitle';
require('./style.css');

export default class News extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let {children} = this.props;
        return (
            <div className="news">
                <BTsubtitle>{children}</BTsubtitle>
                <div className="headline clear">
                    <Link to="/" className="headlineImg fl">
                        <img src={require('img/headline.jpg')} alt=""/>
                    </Link>
                    <div className="headlineShow fl">
                        <Link to="/">定档丨李安新作《双子煞星》2019年10月北美公映</Link>
                        <span>豆瓣观影club</span>
                    </div>
                </div>
                <div className="newsList">
                    <p><Link to="/">预告丨休叔新片《马戏之王》前瞻！</Link></p>
                    <p><Link to="/">话题丨#我见过的地球神奇一刻#</Link></p>
                    <p><Link to="/">日记丨“红色婚礼”从入门到精通</Link></p>
                </div>
            </div>
        )
    }
}
import {Link, NavLink} from 'react-router-dom';

require('./style.css');

export default class NavMovie extends React.Component{
    render() {
        return (
            <div className="nav-movie">

                <div className="nav-wrap">
                    <div className="container clear">
                        <div className="nav-logo fl">
                            <Link to="/">
                                 <img src={require('img/movie.png')} alt=""/> 
                            </Link>
                        </div>
                        <div className="nav-search fl">
                            <input type="text" className="nav-search-input" placeholder="电影、影人、电视剧"/>
                            <button className="nav-search-submit">搜索</button>
                        </div>
                    </div>
                </div>

                <div className="container clear">
                    <ul className="nav-items clear">
                        <li><NavLink to="/buyTicket" activeClassName="active">影讯&购票</NavLink></li>
                        <li><Link to="/">选电影</Link></li>
                        <li><Link to="/">电视剧</Link></li>
                        <li><Link to="/">排行榜</Link></li>
                        <li><Link to="/">分类</Link></li>
                        <li><Link to="/">影评</Link></li>
                        <li><Link to="/">2016年度榜单</Link></li>
                        <li><Link to="/">2016观影报告</Link></li>
                    </ul>
                </div>

            </div>
        )
    }
}
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
                        <li><NavLink to="/chooseMovie" activeClassName="active">选电影</NavLink></li>
                        <li><NavLink to="/teleplay" activeClassName="active">电视剧</NavLink></li>
                        <li><NavLink to="/Review" activeClassName="active">影评</NavLink></li>
                    </ul>
                </div>

            </div>
        )
    }
}
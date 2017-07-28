import {Link, NavLink} from 'react-router-dom';
require('./style.css');

export default function Nav(props){
    return (
        <div className="nav-top clear">
            <ul className="global-nav fl">
                <li><Link to="/index">豆瓣</Link></li>
                <li><NavLink to="/study" activeClassName="active">读书</NavLink></li>
                <li><NavLink to="/" activeClassName="active">电影</NavLink></li>
                <li><NavLink to="/music" activeClassName="active">音乐</NavLink></li>
                <li><NavLink to="/ourCity" activeClassName="active">同城</NavLink></li>
                <li><NavLink to="/group" activeClassName="active">小组</NavLink></li>
                <li><NavLink to="/read" activeClassName="active">阅读</NavLink></li>
                <li><NavLink to="/fm" activeClassName="active">FM</NavLink></li>
                <li><NavLink to="/thing" activeClassName="active">东西</NavLink></li>
                <li><NavLink to="/bazaar" activeClassName="active">市集</NavLink></li>
                <li><NavLink to="/more" activeClassName="active">更多</NavLink></li>
            </ul>
            <ul className="global-nav fr">
                <li><NavLink to="/sign_in" activeClassName="active">登录</NavLink></li>
                <li><NavLink to="/sign_up" activeClassName="active">注册</NavLink></li>
            </ul>
        </div>
    )
}
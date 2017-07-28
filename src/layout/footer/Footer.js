import {Link} from 'react-router-dom';
require('./style.css');

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="container clear">
                <div className="fl">© 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司</div>
                <div className="fr">
                    <Link to="/">关于豆瓣</Link>·
                    <Link to="/">在豆瓣工作</Link>·
                    <Link to="/">联系我们</Link>·
                    <Link to="/">免责声明</Link>·
                    <Link to="/">帮助中心</Link>·
                    <Link to="/">移动应用</Link>·
                    <Link to="/">豆瓣广告</Link>
                </div>
            </div>
        </div>
    )
}
import {Link} from 'react-router-dom';

require('./style.css');

export default function HotLink(props) {
    return (
        <div className="hotLink">
            <h2>电影活动</h2>
            <p>
                <Link to="/">唱而优则演大片，可不止GoT黄老板一人</Link>
            </p>
            <p>
                <Link to="/">聊/晒 #我见过的地球神奇一刻#</Link>
            </p>
        </div>
    )
}
import {Link} from 'react-router-dom';

import Star from 'star/Star';

export default function FilmReviewItem(props) {
    let {item, item:{summary}} = props;
    if(summary.length >= 110) {
        summary = summary.substring(0,110)+'...';
    }
    return (
        <div className="review-item clear">
            <Link to="/" className="left">
                <img src={item.images.large} alt=""/>
            </Link>
            <div className="right">
                <Link to="/" className="itemTitle">{item.title}</Link>
                <div className="myReview">
                    <span>岑·风暴烈酒</span>评论<span>《魔兽》</span>
                    <Star/>
                </div>
                <div className="reviewShow">
                    {summary}
                    <Link to="/">(全文)</Link>
                </div>
            </div>
        </div>
    )
}
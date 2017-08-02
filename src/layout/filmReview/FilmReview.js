import {Link} from 'react-router-dom';
import Loading from 'loading/Loading';

require('./style.css');

import FilmReviewItem from './FilmReviewItem';

export default class FilmReview extends React.Component{
    render() {
        let {data:list} = this.props;
        if(!list){
            return <Loading />
        }
        list = list.map((item, index) => {
            return (
                <FilmReviewItem key={index} {...{item}}/>
            )
        })
        return (
            <div className="review-wrap">
                <div className="review-hd">
                    <h2>
                        最受欢迎的影评
                        <Link to="/">更多热门影评</Link>
                        <Link to="/">新片影评</Link>
                    </h2>
                </div>
                <div className="review-bd">
                    {list}
                </div>
            </div>
        )
    }
}

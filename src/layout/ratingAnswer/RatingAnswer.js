import {Link} from 'react-router-dom';

require('./style.css');

export default function RatingAnswer(props) {
    let {children} = props;
    return (
        <div className="ratingAnswer">
            {children}
        </div>
    )
}
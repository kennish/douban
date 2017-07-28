import UpcomingMoviesItem from './UpcomingMoviesItem';
import BTsubtitle from 'buyTicket/bTsubtitle/BTsubtitle';
require('./style.css');

let propTypes = {
    list: PT.object,
    total: PT.number,
    children: PT.string,
    upcomingMovies: PT.func
}

export default class UpcomingMovies extends React.Component{
    constructor(props) {
        super(props);
        this.moreAjax = this.moreAjax.bind(this);
    }

    moreAjax() {
        let {upcomingMovies, total} = this.props;
        upcomingMovies(total);
    }

    render() {
        let {data:list, total, children, upcomingMovies} = this.props;
        let {moreAjax} = this;
        list = list.map((item, index) => {
            return (
                <UpcomingMoviesItem key={index} {...{item}}/>
            )
        })
        return (
            <div className="upcomingMovies">
                <BTsubtitle>{children}</BTsubtitle>
                <div className="upcomingMovies-bd">
                    <ul className="screening-bar clear">
                        {list}
                    </ul>
                </div>
                {
                    total > 8 && total !== list.length ?
                    <div className="upcomingMovies-ft">
                        <button className="showMoreBtn" onClick={moreAjax}>显示全部影片</button>
                    </div>
                    : null
                }
            </div>
        )
    }
}
UpcomingMovies.propTypes = propTypes;
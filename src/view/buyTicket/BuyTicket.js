import {Link} from 'react-router-dom';

import Cfg from 'config/Config.json';
import Loading from 'loading/Loading';
import Showing from 'buyTicket/showing/Showing';
import UpcomingMovies from 'buyTicket/upcomingMovies/UpcomingMovies';
import TicketGuide from 'buyTicket/ticketGuide/TicketGuide';
import News from 'buyTicket/news/News';
import RatingAnswer from 'ratingAnswer/RatingAnswer';
import PublicPraise from 'publicPraise/PublicPraise';
import Teamwork from 'teamwork/Teamwork';

export default class BuyTicket extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nowShowingData: null,
            nowShowingTotal: null,
            upcomingMoviesData: null,
            upcomingMoviesTotal: null,
            boxOfficeData: null
        }
        this.lock = false;
        this.nowShowing = this.nowShowing.bind(this);
        this.upcomingMovies = this.upcomingMovies.bind(this);
        this.boxOffice = this.boxOffice.bind(this);
    }

    //正在上映ajax
    nowShowing(total) {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/in_theaters`,
            data: {count: total},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    nowShowingData: res.subjects,
                    nowShowingTotal: res.total
                })
            }
        })
    }
    
    //即将上映ajax
    upcomingMovies(total) {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/coming_soon`,
            data: {count: total},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    upcomingMoviesData: res.subjects,
                    upcomingMoviesTotal: res.total
                })
            }
        })
    }

    //票房榜ajax
    boxOffice() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/us_box`,
            data: {count: 10},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    boxOfficeData: res.subjects
                })
            }
        })
    }

    componentDidMount() {
        this.nowShowing(8);
        this.upcomingMovies(8);
        this.boxOffice()
    }
    
    componentWillUnmount() {
        this.lock = true;
    }

    render() {
        let {nowShowingData, nowShowingTotal, upcomingMoviesData, upcomingMoviesTotal, boxOfficeData} = this.state;
        let {nowShowing, upcomingMovies} = this;
        return (
            <div>
                <div className="container">
                    <div className="content clear">
                        <div className="main fl">
                            {
                                nowShowingData ? 
                                <Showing {...{data:nowShowingData, total:nowShowingTotal, nowShowing}}>正在上映</Showing>
                                : <Loading/>
                            }
                            {   
                                upcomingMoviesData ?
                                <UpcomingMovies {...{data:upcomingMoviesData, total:upcomingMoviesTotal, upcomingMovies}}>即将上映</UpcomingMovies>
                                : <Loading/>
                            }
                            <TicketGuide>购票小贴士</TicketGuide>
                        </div>
                        <div className="aside fl">
                            <News>资讯</News>
                            <RatingAnswer><Link to="/">> 我的电影票</Link></RatingAnswer>
                            {
                                boxOfficeData ? 
                                <PublicPraise {...{data:boxOfficeData}}>
                                    电影票房榜
                                </PublicPraise>
                                : <Loading/>
                            }
                            <Teamwork>
                                <p><Link to="/">申请开通影片小站</Link></p>
                                <p><Link to="/">申请开通电影院小站</Link></p>
                            </Teamwork>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
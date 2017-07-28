import {Link} from 'react-router-dom';

import Cfg from 'config/Config.json';

import Loading from 'loading/Loading';
import Screening from 'screening/Screening';
import HotSection from 'hotSection/HotSection';
import HotRecommend from 'hotRecommend/HotRecommend';
import FilmReview from 'filmReview/FilmReview';
import RatingAnswer from 'ratingAnswer/RatingAnswer';
import HotLink from 'home/hotLink/HotLink';
import PublicPraise from 'publicPraise/PublicPraise';
import HotDou from 'hotDou/HotDou';
import Teamwork from 'teamwork/Teamwork';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hotShowingData: null,
            popularMovieData: null,
            PopularTVData: null,
            hotRecommendData: null,
            filmReviewData: null,
            publicPraiseData: null
        }
        this.lock = false; //开关，组件销毁的时候异步请求不触发setState
        this.hotShowing = this.hotShowing.bind(this);
        this.popularMovie = this.popularMovie.bind(this);
        this.PopularTV = this.PopularTV.bind(this);
        this.hotRecommend = this.hotRecommend.bind(this);
        this.filmReview = this.filmReview.bind(this);
    }

    //正在热映
    hotShowing() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/in_theaters`,
            data: {count: 20},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    hotShowingData: res.subjects
                })
            }
        })
    }

    //热门电影
    popularMovie() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/coming_soon`,
            data: {count: 40},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    popularMovieData: res.subjects
                })
            }
        })
    }

    //热门电视
    PopularTV() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/coming_soon`,
            data: {count: 24},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    PopularTVData: res.subjects
                })
            }
        })
    }

    //热门推荐
    hotRecommend() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/search`,
            data: {count: 6, q: '蜘蛛侠'},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    hotRecommendData: res.subjects
                })
            }
        })
    }

    //热门影评
    filmReview() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/book/search`,
            data: {count: 4, q: '科幻'},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    filmReviewData: res.books
                })
            }
        })
    }

    //口碑榜
    publicPraise() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/us_box`,
            data: {count: 4},
            dataType: 'jsonp'
        }).done((res) => {
            if(!this.lock){
                this.setState({
                    publicPraiseData: res.subjects
                })
            }
        })
    }

    componentDidMount() {
        this.hotShowing();
        this.popularMovie();
        this.PopularTV();
        this.hotRecommend();
        this.filmReview();
        this.publicPraise();
    }

    //组件将要被销毁
    componentWillUnmount() {
        this.lock = true;
    }

    render() {
        let {hotShowingData, popularMovieData, PopularTVData, hotRecommendData, filmReviewData, publicPraiseData} = this.state;
        return (
            <div className="">
                <div className="container">
                    <div className="content clear">
                        <div className="main fl">
                            {
                                hotShowingData ? 
                                <Screening {...{hotShowingData}}>
                                    正在热映
                                    <Link to="/">全部正在热映</Link>
                                    <Link to="/">即将上映</Link>
                                </Screening>
                                : <Loading/>
                            }
                            {
                                popularMovieData ? 
                                <HotSection {...{data: popularMovieData, autoPlay: false}}>
                                    <Link to="/">热门</Link>
                                    <Link to="/">最新</Link>
                                    <Link to="/">豆瓣高分</Link>
                                    <Link to="/">冷门佳片</Link>
                                    <Link to="/">话语</Link>
                                    <Link to="/">欧美</Link>
                                    <Link to="/">韩国</Link>
                                    <Link to="/">日本</Link>
                                </HotSection>
                                : <Loading/>
                            }
                            {
                                PopularTVData ?
                                <HotSection {...{data: PopularTVData, autoPlay: false}}>
                                    <Link to="/">热门</Link>
                                    <Link to="/">国产</Link>
                                    <Link to="/">综艺</Link>
                                    <Link to="/">美剧</Link>
                                    <Link to="/">韩剧</Link>
                                    <Link to="/">日剧</Link>
                                    <Link to="/">动漫</Link>
                                    <Link to="/">纪录片</Link>
                                </HotSection>
                                : <Loading/>
                            }
                            {
                                hotRecommendData ?
                                <HotRecommend {...{data: hotRecommendData, autoPlay: true}}>
                                    热门推荐
                                </HotRecommend>
                                : <Loading/>
                            }
                            {
                                filmReviewData ? <FilmReview {...{data: filmReviewData}}/> : <Loading/>
                            }
                        </div>
                        <div className="aside fl">
                            <RatingAnswer>
                                <Link to="/">豆瓣电影评分八问</Link>
                            </RatingAnswer>
                            <HotLink/>
                            {
                                publicPraiseData ? 
                                <PublicPraise {...{data:publicPraiseData}}> 
                                    本周口碑榜<Link to="/">更多榜单»</Link>
                                </PublicPraise>
                                : <Loading/>
                            }
                            <RatingAnswer>
                                <Link to="/">> 通兑券换票</Link>
                            </RatingAnswer>
                            <HotDou/>
                            <Teamwork>
                                <p>电影合作邮箱：<span>movie@douban.com</span></p>
                                <p>电影合作邮箱：<span>movie@douban.com</span></p>
                            </Teamwork>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
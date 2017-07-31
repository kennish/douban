import {NavLink} from 'react-router-dom';
import Cfg from 'config/Config.json';
import Filter from 'filter/Filter';
import List from 'list/List';
import HotDou from 'hotDou/HotDou';
import Loading from 'loading/Loading';

export default class ChooseMovie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listData: null,
            ajaxEnd: true
        }
        this.lock = false;
        this.listAjax = this.listAjax.bind(this);
    }

    //电影列表
    listAjax(count) {
        this.setState({
            ajaxEnd: false
        })
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/movie/coming_soon`,
            data: {count: count},
            dataType: 'jsonp'
        }).done((res) => {
            console.log(res);
            if(!this.lock){
                this.setState({
                    listData: res.subjects,
                    ajaxEnd: true
                })
            }
        })
    }

    componentDidMount() {
        this.listAjax(12);
    }

    componentWillUnmount() {
        this.lock = true;
    }

    render() {
        let {listData, ajaxEnd} = this.state;
        let {listAjax} = this;
        return (
            <div className="container">
                <div className="content clear">
                    <div className="main fl">
                        <Filter>
                            <NavLink exact to="/chooseMovie" activeClassName="active">默认</NavLink>
                            <NavLink to="/chooseMovie/hot" activeClassName="active">热门</NavLink>
                            <NavLink to="/chooseMovie/new" activeClassName="active">最新</NavLink>
                        </Filter>
                        {
                            listData ? <List {...{data:listData, listAjax, ajaxEnd}}/> : <Loading/>
                        }
                        
                    </div>
                    <div className="aside fl">
                        <HotDou/>
                    </div>
                </div>
            </div>
        )
    }
}
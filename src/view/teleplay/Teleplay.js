import {NavLink} from 'react-router-dom';
import Cfg from 'config/Config.json';
import Filter from 'filter/Filter';
import List from 'list/List';
import Groups from 'teleplay/groups/Groups';

export default class Teleplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listData: null,
            ajaxEnd: true
        }
        this.lock = false;
        this.listAjax = this.listAjax.bind(this);
    }

    //电视剧列表
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

    componentWillmount() {
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
                            <NavLink exact to="/teleplay" activeClassName="active">默认</NavLink>
                            <NavLink to="/teleplay/hot" activeClassName="active">热门</NavLink>
                            <NavLink to="/teleplay/new" activeClassName="active">最新</NavLink>
                        </Filter>
                        <List {...{data:listData, ajaxEnd, listAjax}}/>
                    </div>
                    <div className="aside fl">
                        <Groups/>
                    </div>
                </div>
            </div>
        )
    }
}
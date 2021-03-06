import Item from 'item/Item';
import Loading from 'loading/Loading';
require('./style.css');

let propTypes = {
    listAjax: PT.func,
    list: PT.array,
    ajaxEnd: PT.bool
}
export default class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.i = 1;
        this.loadMoreAjax = this.loadMoreAjax.bind(this);
    }

    loadMoreAjax() {
        this.i++;
        let {listAjax} = this.props;
        listAjax(12*this.i)
    }

    render() {
        let {data:list, ajaxEnd} = this.props;
        let {loadMoreAjax} = this;

        if(!list){
            return <Loading/>
        }
        
        list = list.map((item,index) => {
            return (
                <Item key={index} {...{item}}/>
            )
        })
        return (
            <div className="list-wp clear">
                {list}
                {
                    ajaxEnd ? 
                    <button className="loadMore" onClick={loadMoreAjax}>加载更多</button>
                    : 
                    <button className="loadMore">加载中...</button>
                }
                
            </div>
        )
    }
}
List.propTypes = propTypes;
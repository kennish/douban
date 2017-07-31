import Item from 'item/Item';
require('./style.css');

export default class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
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
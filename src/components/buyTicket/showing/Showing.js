import BuyTicketItem from 'item/BuyTicketItem';
import BTsubtitle from 'buyTicket/bTsubtitle/BTsubtitle';
require('./style.css');

let propTypes = {
    list: PT.array,
    total: PT.number,
    children: PT.string,
    nowShowing: PT.func
}

export default class Showing extends React.Component{
    constructor(props) {
        super(props);
        this.moreAjax = this.moreAjax.bind(this);
    }
    moreAjax() {
        let {nowShowing, total} = this.props;
        nowShowing(total);
    }
    render() {
        let {data:list, total, children} = this.props;
        let {moreAjax} = this;
        list = list.map((item, index) => {
            return (
                <BuyTicketItem key={index} {...{item}}/>
            )
        })
        return (
            <div className="nowShowing">
                <BTsubtitle>{children}</BTsubtitle>
                <div className="nowShowing-bd">
                    <ul className="screening-bar clear">
                        {list}
                    </ul>
                </div>
                {
                    total > 8 && total !== list.length ?
                    <div className="nowShowing-ft">
                        <button className="showMoreBtn" onClick={moreAjax}>显示全部影片</button>
                    </div>
                    : null
                }
            </div>
        )
    }
}
Showing.propTypes = propTypes;
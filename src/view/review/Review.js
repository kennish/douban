import Cfg from 'config/Config.json';
import FilmReview from 'filmReview/FilmReview';
import Info from 'review/info/Info';

export default class Review extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            reviewData: null
        }
        this.lock = false;
        this.reviewAjax = this.reviewAjax.bind(this);
    }

    reviewAjax() {
        $.ajax({
            type: 'get',
            url: `${Cfg.url}/v2/book/search`,
            data: {count: 8, q: 'react'},
            dataType: 'jsonp'
        }).done((res) => {
            console.log(res);
            if(!this.lock){
                this.setState({
                    reviewData: res.books
                })
            }
        })
    }

    componentDidMount() {
        this.reviewAjax();
        // let {history} = this.props;
        // setTimeout(() => {
        //     history.push('/buyTicket')
        // },3000)
    }

    componentWillmount() {
        this.lock = true;
    }

    render() {
        let {reviewData} = this.state;
        return (
            <div className="container">
                <div className="content clear">
                    <div className="main fl">
                        <FilmReview {...{data:reviewData}}/>
                    </div>
                    <div className="aside fl">
                        <Info/>
                    </div>
                </div>
            </div>
        )
    }
}
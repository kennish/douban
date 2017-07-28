import {Link} from 'react-router-dom';
require('./style.css');

import Subtitle from 'subtitle/Subtitle';

export default class PublicPraise extends React.Component{
    render() {
        let {data:list, children} = this.props;
        list = list.map((item, index) => {
            return (
                <p key={index}>{index+1}<Link to="/">{item.subject.title}</Link></p>
            )
        })
        return (
            <div className="publicPraise">
                <Subtitle>
                    {children}
                </Subtitle>
                <div className="publicPraiseList">
                    {list}
                </div>
            </div>
        )
    }
}
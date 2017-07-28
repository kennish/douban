require('./style.css');

let propTypes = {
    starNum: PT.number
}
export default class Star extends React.Component{
    render() {
        let {starNum} = this.props;
        return (
            <div className="rating">
                <span className="rating-star">
                    <i className={`ion-ios-star ${starNum > 0 ? 'act' : null}`}></i>
                    <i className={`ion-ios-star ${starNum > 2 ? 'act' : null}`}></i>
                    <i className={`ion-ios-star ${starNum > 4 ? 'act' : null}`}></i>
                    <i className={`ion-ios-star ${starNum > 6 ? 'act' : null}`}></i>
                    <i className={`ion-ios-star ${starNum > 8 ? 'act' : null}`}></i>
                </span>
                <span>{starNum}</span>
            </div>
        )
    }
} 

Star.propTypes = propTypes;
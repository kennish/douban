import Subtitle from 'subtitle/Subtitle';
require('./style.css');

export default function Teamwork(props) {
    let {children} = props;
    return (
        <div className="Teamwork">
            <Subtitle>合作联系</Subtitle>
            <div className="TeamworkShow">
                {children}
            </div>
        </div>
    )
}
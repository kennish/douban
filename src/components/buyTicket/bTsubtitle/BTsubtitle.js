require('./style.css');

let propTypes = {
    children: PT.string
}
export default function BTsubtitle(props) {
    let {children} = props;
    return (
        <div className="bTsubtitle">
            <h2>{children}</h2>
        </div>
    )
}
BTsubtitle.propTypes = propTypes;
require('./style.css');

export default function Subtitle(props) {
    let {children} = props;
    return (
        <div className="subtitle">
            <h2>
                {children}
            </h2>
        </div>
    )
}
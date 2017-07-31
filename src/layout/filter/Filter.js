require('./style.css');
export default function Filter(props) {
    let {children} = props;
    return (
        <div className="filter">
            <div className="tags">
                {children}
            </div>
            <div className="tool clear">
                <div className="sort">
                    <label>
                        <input type="radio" name="sort"/>按热度排序
                    </label>
                    <label>
                        <input type="radio" name="sort"/>按时间排序
                    </label>
                    <label>
                        <input type="radio" name="sort"/>按评价排序
                    </label>
                </div>
                <div className="check">
                    <label>
                        <input type="checkbox" name="watched"/>我没看过的
                    </label>
                    <label>
                        <input type="checkbox" name="playable"/>可在线播放
                    </label>
                </div>
            </div>
        </div>
    )
}
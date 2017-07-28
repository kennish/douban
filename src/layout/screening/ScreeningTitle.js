export default function ScreeningTitle(props) {
    let {children, prevPage, nextPage, i, pageLen} = props;
    return (
        <div className="screening-hd clear">
            <h2 className="fl">
                {children}
            </h2>
            <div className="ui-slide-control fr">
                <a className="prev" href="javascript:;" onClick={prevPage}><i className="ion-chevron-left"></i></a>
                <a className="next" href="javascript:;" onClick={nextPage}><i className="ion-chevron-right"></i></a>
            </div>
            <div className="slide-tip fr">
                <span>
                    {
                        i == pageLen-1 ? 1 : i == 0 ? pageLen-2 : i
                    }
                </span>
                /
                <span>{pageLen-2}</span>
            </div>
        </div>
    )
}
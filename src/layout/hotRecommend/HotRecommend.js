import {Link} from 'react-router-dom';

require('./style.css');
import ScreeningTitle from 'screening/ScreeningTitle';
import HotRecommendItem from './HotRecommendItem';

export default class HotRecommend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bdWidth: null,
            imgArr: this.props.data,
            i: 1,
            end: true
        }
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.autoPlay = this.autoPlay.bind(this);
        this.wrapMouseMove = this.wrapMouseMove.bind(this);
        this.wrapMouseOut = this.wrapMouseOut.bind(this);
    }

    //上一页
    prevPage() {
        let {imgArr, i, end} = this.state;
        let pageLen = imgArr.length;
        let {screeningBar} = this.refs;
        if(end){
            this.setState({
                end: false
            })
            if(i > 0){
                screeningBar.style.transition = "transform 1s";
                this.setState({
                    i: i-1
                })
                let oneBtn = true;
                screeningBar.addEventListener("transitionend",()=>{
                    if(oneBtn){
                        oneBtn = false;
                        if(this.state.i == 0){
                            screeningBar.style.transition = "transform 0s";
                            this.setState({
                                i: pageLen-2
                            })
                        }
                        this.setState({
                            end: true
                        })
                    }
                })
            }
        }
    }

    //下一页
    nextPage() {
        //setTimeout(()=>{
            let {imgArr, i, end} = this.state;
            let pageLen = imgArr.length;
            let {screeningBar} = this.refs;
            if(end){
                this.setState({
                    end: false
                })
                if(i < pageLen-1){
                    screeningBar.style.transition = "transform 1s";
                    this.setState({
                        i: i+1
                    })
                    let oneBtn = true;
                    screeningBar.addEventListener("transitionend",()=>{
                        if(oneBtn){
                            oneBtn = false;
                            if(this.state.i == pageLen-1){
                                screeningBar.style.transition = "transform 0s";
                                this.setState({
                                    i: 1
                                })
                            }
                            this.setState({
                                end: true
                            })
                        }
                    })
                }
            }
        //},0)
    }

    //自动轮播
    autoPlay() {
        this.interval = setInterval(() => {
            this.nextPage();
        },3000)
    }

    wrapMouseMove() {
        clearInterval(this.interval);
    }

    wrapMouseOut(){
        this.autoPlay();
    }

    componentWillMount() {
        let {imgArr} = this.state;
        imgArr.unshift(imgArr[imgArr.length-1])
        imgArr.push(imgArr[1])
    }

    componentDidMount() {
        this.autoPlay()
        let {screeningBd} = this.refs;
        this.setState({
            bdWidth: screeningBd.offsetWidth
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let {prevPage, nextPage, wrapMouseMove, wrapMouseOut} = this;
        let {children} = this.props;
        let {bdWidth, imgArr, i} = this.state;
        let pageLen = imgArr.length;
        imgArr = imgArr.map((item, index) => {
            return (
                <HotRecommendItem key={index} {...{item}}/>
            )
        })
        return (
            <div className="screening" onMouseMove={wrapMouseMove} onMouseOut={wrapMouseOut}>
                <ScreeningTitle {...{prevPage, nextPage, i, pageLen}}>
                    {children}
                </ScreeningTitle>
                <div ref="screeningBd" className="screening-bd">
                    <ul ref="screeningBar" className="hotRecommend-bar clear" 
                    style={{width: `${bdWidth*pageLen}px`, transform: `translate(-${bdWidth*i}px)`}}>
                        {imgArr}
                    </ul>
                </div>
            </div>
        )
    }
}
import {Link} from 'react-router-dom';

import HotSectionTitle from './HotSectionTitle';
import Item from 'item/Item';
require('./style.css');

export default class HotSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgArr: this.props.data,
            bodyWidth: null,
            i: 1,
            end: true
        }
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.autoPlay = this.autoPlay.bind(this);
        this.wrapMouseMove = this.wrapMouseMove.bind(this);
        this.wrapMouseOut = this.wrapMouseOut.bind(this);
    }

    nextPage() {
        let{imgArr, i, end} = this.state;
        let {HotSectionBar, HotSectionTips} = this.refs;

        let len = null;
        len = Math.ceil(imgArr.length/8); //上舍入取整
        
        if(end){
            this.setState({
                end: false
            })
            if(i < len-1){
                HotSectionBar.style.transition = "transform 1s";
                this.setState({
                    i: i+1
                })
                
                let oneBtn = true;
                HotSectionBar.addEventListener("transitionend",() => {
                    if(oneBtn){
                        oneBtn = false;
                        
                        if(this.state.i == len-1){
                            HotSectionBar.style.transition = "transform 0s";
                            this.setState({
                                i: 1
                            })
                        }
                        this.setState({
                            end: true
                        })
                        $(HotSectionTips).find("i").eq(this.state.i-1).addClass("active")
                        .siblings().removeClass("active");
                    }
                })
            }
        }
    }

    prevPage() {
        let{imgArr, i, end} = this.state;
        let {HotSectionBar, HotSectionTips} = this.refs;

        let len = null;
        len = Math.ceil(imgArr.length/8); //上舍入取整

        if(end){
            this.setState({
                end: false
            })
            if(i > 0){
                HotSectionBar.style.transition = "transform 1s";
                this.setState({
                    i: i-1
                })
                let oneBtn = true;
                HotSectionBar.addEventListener("transitionend",() => {
                    if(oneBtn){
                        oneBtn = false;
                        if(this.state.i == 0){
                            HotSectionBar.style.transition = "transform 0s";
                            this.setState({
                                i: len-2
                            })
                        }
                        this.setState({
                            end: true
                        })
                        $(HotSectionTips).find("i").eq(this.state.i-1).addClass("active")
                        .siblings().removeClass("active");
                    }
                })
            }
        }
    }

    wrapMouseMove() {
        let {autoPlay} = this.props;
        if(autoPlay){
            clearInterval(this.interval);
        }
    }

    wrapMouseOut() {
        let {autoPlay} = this.props;
        if(autoPlay){
            this.autoPlay();
        }
    }

    autoPlay() {
        this.interval = setInterval(() => {
            this.nextPage();
        },3000)
    }

    componentWillMount() {
        let {imgArr} = this.state;
        imgArr.unshift(imgArr[imgArr.length-1])
        imgArr.unshift(imgArr[imgArr.length-2])
        imgArr.unshift(imgArr[imgArr.length-3])
        imgArr.unshift(imgArr[imgArr.length-4])
        imgArr.unshift(imgArr[imgArr.length-5])
        imgArr.unshift(imgArr[imgArr.length-6])
        imgArr.unshift(imgArr[imgArr.length-7])
        imgArr.unshift(imgArr[imgArr.length-8])
        imgArr.push(imgArr[8])
        imgArr.push(imgArr[9])
        imgArr.push(imgArr[10])
        imgArr.push(imgArr[11])
        imgArr.push(imgArr[12])
        imgArr.push(imgArr[13])
        imgArr.push(imgArr[14])
        imgArr.push(imgArr[15])
    }

    componentDidMount() {
        let {hotSectionBd, HotSectionTips} = this.refs;
        let {autoPlay} = this.props;
        this.setState({
            bodyWidth: hotSectionBd.offsetWidth
        })
        $(HotSectionTips).find("i").eq(0).addClass("active");
        if(autoPlay) {
            this.autoPlay();
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        let {bodyWidth, imgArr, i} = this.state;
        let {children} = this.props;
        let {nextPage, prevPage, wrapMouseMove, wrapMouseOut} = this;

        let len = null;
        len = imgArr.length/8;
        if(imgArr%8 != 0){
            len = len+1;
        }
        //得到item的集合
        imgArr = imgArr.map((item, index) => {
            return (
                <Item key={index} {...{item}}/>
            )
        })
        //通过取模输出li,每个li容器里面有8个item
        let iNow = 1;
        let arr = [];
        let list = null;
        list = imgArr.map((item, index) => {
            let _i = index+1;
            if(_i <= 8*iNow){
                arr.push(item);  //添加
                if(_i%8 == 0){
                    iNow = iNow+1;
                    let arr2 = arr;  //存储
                    arr = [];  //清空
                    return <li key={index} className="clear">{arr2}</li>
                }
            }  
            //如果有剩余的则额外添加一次
            if(imgArr.length == _i){
                return <li key={index}>{arr}</li>
            }
            
        })
        //过滤掉undefined的项
        list = list.filter((item) => {
            return item != undefined;
        })
        
        return (
            <div className="hotSection">
                <HotSectionTitle>
                    {children}
                </HotSectionTitle>
                <div className="hotSection-bd" ref="hotSectionBd" onMouseMove={wrapMouseMove} onMouseOut={wrapMouseOut}>
                    <ul ref="HotSectionBar" className="hotSection-bar clear" 
                    style={{width: `${bodyWidth*len}px`, transform: `translate(-${bodyWidth*i}px)`}}>
                        {list}
                    </ul>
                    <div className="hotSection-slide-control">
                        <a className="prev" href="javascript:;" onClick={prevPage}>
                            <i className="ion-chevron-left"></i>
                        </a>
                        <span ref="HotSectionTips">
                            {
                                list.map((item,index) => {
                                    if(index < list.length-2){
                                        return <i key={index}></i>
                                    }
                                })
                            }
                        </span>
                        <a className="next" href="javascript:;" onClick={nextPage}>
                            <i className="ion-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
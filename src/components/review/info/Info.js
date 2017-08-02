export default function Info(props) {
    return (
        <div className="info-wrap">
            <p style={{fontSize: '12px', color: '#999999', marginTop:'10px', lineHeight: '20px'}}>
                如果你觉得一篇评论对你有帮助，请你点击“有用”。
                你的投票直接决定哪些评论出现在豆瓣首页和“豆瓣最受欢迎的评论”里，
                以及在书、电影和音乐介绍页里评论的排序。
            </p>
            <p style={{fontSize: '12px', color: '#999999', marginTop:'10px'}}>所有“没用”的点击都是匿名的。</p>
        </div>
    )
}
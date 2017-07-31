import Subtitle from 'subtitle/Subtitle';
import GroupsItem from './GroupsItem';
require('./style.css');

export default class Groups extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            groupsData: [
                {title: '爱奇艺'},
                {title: '优酷视频'},
                {title: '腾讯视频'},
                {title: '哔哩哔哩'},
                {title: '乐视TV'}
            ]
        }
    }
    render() {
        let {groupsData} = this.state;
        groupsData = groupsData.map((item, index) => {
            return (
                <GroupsItem key={index} {...{item}}/>
            )
        })
        return (
            <div className="groups">
                <Subtitle>喜欢看电视剧的人常去的小组</Subtitle>
                <div className="groups-bd clear">
                    {groupsData}
                </div>
            </div>
        )
    }
}
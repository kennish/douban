import BTsubtitle from 'buyTicket/bTsubtitle/BTsubtitle';

export default class TicketGuide extends React.Component{
    render() {
        let {children} = this.props;
        return (
            <div className="ticketGuide" style={{marginBottom: '40px'}}>
                <BTsubtitle>{children}</BTsubtitle>
                <div className="ticketGuide-bd">
                    <img src={require('img/ticket-guide.gif')} alt=""/>
                </div>
            </div>
        )
    }
}
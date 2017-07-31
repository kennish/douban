import {Route, Redirect} from 'react-router-dom';

import Nav from 'nav/Nav';
import NavMovie from 'navMovie/NavMovie';
import Home from 'home/Home';
import BuyTicket from 'buyTicket/BuyTicket';
import ChooseMovie from 'chooseMovie/ChooseMovie';
import Footer from 'footer/Footer';

export default class Frame extends React.Component{
    render() {
        return (
            <div>
                <Nav/>
                <NavMovie/>
                <Route exact path="/" component={Home}/>
                <Route path='/buyTicket' component={BuyTicket}/>
                <Route path='/chooseMovie' component={ChooseMovie}/>
                <Footer/>
            </div>
        )
    }
}
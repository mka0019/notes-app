import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {FEATURES} from '../shared/featurecards'
import SignIn from './SignInComponent';
// import SignUp from './SignUpComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
            features:FEATURES
        };
    }   
    render(){
        return(
            <div>
            {/* <Header/> */}
            {/* To hide the nav from the sign-in page */}
            {this.props.location.pathname!=='/sign-in' ? <Header/>:null}
            <Switch>
                    <Route path='/home' render={() => <Home feature={this.state.features}/>} />
                    <Route exact path='/sign-in' component={SignIn} />
                    <Redirect to='/home' />
            </Switch>
            <Footer/>
            </div>
        );
    }

}




export default withRouter(Main);
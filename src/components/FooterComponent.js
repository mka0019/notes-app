import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props){
    return(
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="h1">
                        ToDoApp
                    </div>
                </div>
            </div>
            <div className="row footer-links mb-3">
                <div className="col-12">
                    <ul className="list-unstyled d-flex">
                            <li><Link to='/home' className="link-1" aria-label="Homepage">Home</Link></li>
                            <li><Link to='/home#about' aria-label="About">About</Link></li>
                            <li><Link to='/sign-in' aria-label="sign in">Sign In</Link></li>
                            <li><Link to='/sign-up' aria-label="sign up">Sign Up</Link></li>
                            <li><Link to='/contact' aria-label="contact">Contact</Link></li>
                        </ul>
                </div>
            </div>
            <div className="row footer-social-icons">             
                <div className="col text-center d-flex">
                    <a className="" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                    <a className="" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>
                    <a className="" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                    <a className="" href="http://twitter.com/"><i className="fa fa-envelope" /></a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
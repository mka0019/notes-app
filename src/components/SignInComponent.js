import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = val => val &&val.length;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SignIn extends Component {

    handleLogin(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        //JSON.stringify --> will make a string from a Javascript object
        alert('Current state is: ' + JSON.stringify(values));
        //event.preventDefault(); //to prevent page from refreshing on form submission
    }

    render(){
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row split-form no-gutter">
                        <div className="col-md-6 d-none d-md-flex hv100 panel-left">
                            <div className="container m-auto">
                                <div className="row">
                                    <div className="col-10 mx-auto">
                                        <img src="../assets/images/goals.png" className="img-fluid" alt="todo list image" />
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 panel-right">
                            <div className="d-flex align-items-center py-5 hv100">
                                <div className="container">
                                    <div className="row sign-in-up-header">
                                        <div className="" md={12}>
                                            <h1>SIGN IN</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="col-lg-10 col-xl-7 mx-auto">
                                            <LocalForm onSubmit={values => this.handleLogin(values)}>
                                                <Row className="form-group">
                                                    {/* <Label htmlFor="email" md={12}>Email</Label> */}
                                                    <Col md={12}>
                                                        <Control.text model=".email" id="email" name="email"
                                                            placeholder="Email"
                                                            className="form-control"
                                                            validators={{
                                                                required, 
                                                                validEmail
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".email"
                                                            show="touched"
                                                            component="div"
                                                            messages={{
                                                                required: '*Required',
                                                                validEmail: '*Invalid email address'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    {/* <Label htmlFor="password" md={12}>Password</Label> */}
                                                    <Col md={12}>
                                                        <Control.text model=".password" id="password" name="password"
                                                            placeholder="Password"
                                                            className="form-control"
                                                            validators={{
                                                                required
                                                            }}
                                                        />
                                                        <Errors 
                                                            className="text-success"
                                                            model=".password"
                                                            show="touched"
                                                            component="div"
                                                            messages={{
                                                                required: '*Required'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="form-group">
                                                    <Col md={12}>
                                                        <Button type="submit" className="btn-purple w-100 mt-3">
                                                            SIGN IN
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </LocalForm>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-center form-message">
                                            <p>Don't have an account? Sign Up</p>
                                        </div>
                                    </div>                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}


export default SignIn;
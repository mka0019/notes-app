import React from 'react';
import { Jumbotron, Button, Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderJumbotron(props){
    return(
        <Jumbotron fluid>
        <div className="container">
            <div className="row">
                <div className="col-md-6 vert-center">
                    <div className="header-container">
                        <h1>ToDo/Note App</h1>
                        <h2>Will be creating a simple app that will allow user to login into a todo/notes app.</h2>
                    </div>
                    <div className="button-container">
                        <Link to='/sign-up' aria-label="sign-up">
                             <Button>Sign Up</Button>
                        </Link>
                        <Link to='/sign-in' aria-label="sign-in">
                            <Button>Sign In</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="../assets/images/todo-purple.jpg" className="img-fluid" alt="todo list" />
                </div>
            </div>
        </div>
    </Jumbotron>
    );
}

function RenderFeatureCard({fc}){
    return (
        <Card className="h-100">
            <div className="img-cont">
                <CardImg src={fc.image} alt={fc.name} className="img-fluid" />
            </div>
            <CardBody>
                <CardTitle>{fc.title}</CardTitle>
                <CardText>{fc.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderAbout(props){
    return(
        <div id="about" className="container about-container">
            <div className="row">
                <div className="col-md-6">
                    <img src="../assets/images/todo-list-lady.png" className="img-fluid"  alt="lady with a todo list"/>
                </div>
                <div className="col-md-6 vert-center">
                    <h2 className="mb-3">Turning Goals into Reality</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est la.</p>
                    </div>
            </div>
        </div>
    );
}


function Home(props){
    const featureCards = props.feature.map(fc =>{
        return(
            <div key={fc.id} className="col-md-5 m-1">
            <RenderFeatureCard fc={fc} />
        </div>
        );
    });

    return(
        <React.Fragment>
            <RenderJumbotron/>
            <div className="container-fluid features-containter">
                <h2 className="text-center mb-4">Features</h2>
                <div className="row justify-content-center">
                    {featureCards}
                </div>
            </div>
            <RenderAbout/>
        </React.Fragment>
    );
}

export default Home;
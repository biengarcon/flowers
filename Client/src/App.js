import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Footer from "./Footer";
// import "./index.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProductInfo from "./ProductPage/ProductPage";



function Home () {
    return (
        <>
            <Carousel className='carousel'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/5c7fsC0/1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>1</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-700"
                        src="https://i.ibb.co/vcrzTZJ/viber-2021-09-04-15-37-54-035.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>2</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4YyzGCS/viber-2021-09-04-15-41-27-068.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>3</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <MenuItems/>
        </>
    )
}


class MenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        // this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/flowers/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.flowers
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Loading...</p>
        } else {
            return (
                <Row xs={1} md={3} className="g-4">
                    {items.map((item, idx) => (
                        <Col key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.imgSrc} />
                                <Card.Body>
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Title> Состав</Card.Title>
                                    <Card.Text>
                                        {item.composition}
                                    </Card.Text>
                                    <Link to={'/product/' + item.id} className="btn btn-primary">Подробнее</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )
        }
    }
}



export default function App() {
    return(
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path='/product/:id'><ProductInfo/></Route>
                    <Route path='/'><Home/></Route>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}


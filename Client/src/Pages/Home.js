import Carousel from "react-bootstrap/Carousel";
import React, {Component} from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

 export function Home () {
    return (
        <>
            <Carousel className='carousel'>
                <Carousel.Item interval={2000}>
                    <img
                        className="carousel-image d-block w-100 h-700"
                        src='https://i.ibb.co/0qxKcYV/carousel-1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1></h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="carousel-image d-block w-100 h-700"
                        src="https://i.ibb.co/hXWgBB6/carousel-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image d-block w-100 h-700"
                        src="https://i.ibb.co/NsgsYMP/carousel-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
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
        const requestIp = 'http://127.0.0.1:8000/api/flowers/';
        fetch(requestIp)
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
            return  <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        } else {
            return (
                <Row xs={1} md={2} lg={4} className="g-4">
                    {items.map((item) => (
                        <Col key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.imgSrc} />
                                <Card.Body>
                                    <Card.Header><strong>{item.title}</strong></Card.Header>
                                    <Card.Text>
                                        {item.description}
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


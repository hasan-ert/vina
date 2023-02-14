import React from 'react'

//styles
import { Col, Container, Row } from 'react-bootstrap'
import "./Hero.css"

//image
import backgroundPhoto from "../../assets/hero-section-honeycomb.jpg"

export default function Hero(){
    return (
        <>
            <Container fluid className='hero-main-container'>
                <div className='hero-background'>
                    <img src={backgroundPhoto} alt="honey comb"/>
                </div>
                <Row>
                    <Col xs={12} md={8} className="hero-info-col">
                        <h1>Welcome to VINA</h1>
                        <h2>Lorem Ipsum Dolor Sit Amet</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, ipsum vitae interdum convallis, lacus risus suscipit lorem, sit amet euismod mi sapien eget lectus.
                        Donec posuere, erat vitae feugiat pellentesque, quam dolor feugiat nisl, et hendrerit urna tellus in tellus. Sed dignissim, neque sed ullamcorper rutrum, felis purus imperdiet nisl, sed ultrices magna dui a lacus.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

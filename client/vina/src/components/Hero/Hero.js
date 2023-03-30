import React from "react";

//styles
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

//image
import backgroundPhoto from "../../assets/hero-section-honeycomb.jpg";

export default function Hero() {
    return (
        <>
            <Container
                fluid
                id="hero-main-container"
                className="hero-main-container"
            >
                <div className="hero-background">
                    <img src={backgroundPhoto} alt="honey comb" />
                </div>
                <Row>
                    <Col xs={12} md={8} className="hero-info-col">
                        <h1>Welcome to VINA</h1>
                        <h2>Doğal Arı Zehri Hasadı ve Tedariği</h2>
                        <p>
                            Kendi geliştirdiğimiz yenlikçi aparatlarımızı
                            kullanarak sözleşmeleri arıcılarımız ile yüksek
                            kaliteli arı zehri hasadı gerçekleştiriyoruz.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

//style
import "./JoinUs.css";

//image
import beehivePhoto from "../../assets/beehives.jpg";
import CustomButton from "../CustomButton/CustomButton.tsx";

export default function JoinUs() {
    return (
        <>
            <Container
                id="join-main-container"
                className="join-main-container"
                fluid
            >
                <div className="back-layer"></div>
                <Row className="join-main-row">
                    <Col xs={12} lg={6} className="join-info-col">
                        <h2>Yerel Arıcılar ile Çalışıyoruz!</h2>
                        <h3>
                            Arıcı ağımıza katılacak yeni iş ortakları arıyoruz
                        </h3>
                        <p>
                            Sözleşme yaptığımız arıcılarımıza aparat ve ekip
                            desteği sağlayarak kovanlarından arı zehri hasadını
                            gerçekleştiriyoruz. İşlem yaptığımız kovan başına
                            arıcılarımıza komisyon ödüyoruz. İş modelimiz ile
                            arıcılarımız yatırım ve operasyon maliyeti olmadan
                            kovanlarından ek gelir elde ediyorlar
                        </p>

                        <Row
                            style={{
                                display: "flex",
                                justifyContent: "end",
                            }}
                        >
                            <CustomButton className="join-btn">
                                <h5>Bize Katılın</h5>
                            </CustomButton>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className="join-pic-col">
                        <img
                            className="jumbotron-pic"
                            src={beehivePhoto}
                            alt="beehives"
                        ></img>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

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
                        <h2>We Work With Local Beekeepers!</h2>
                        <h3>Looking for new partners in our bussiness</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <Row style={{ display: "flex", justifyContent: "end" }}>
                            <CustomButton className="join-btn">
                                <h5>Join Us</h5>
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

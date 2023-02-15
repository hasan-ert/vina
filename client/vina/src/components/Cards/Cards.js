import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Cards.css";
import Card from "./Card";
import illustration from "../../assets/illustration.png";
import illustration2 from "../../assets/illustration2.png";
const dummy = [
    {
        title: "Deneme Icin Girilmis Bir Card",
        content: "Lorem ipsum dolor sit amet",
    },
    { title: "deneme", content: "Lorem ipsum dolor sit amet" },
    { title: "deneme", content: "Lorem ipsum dolor sit amet" },
    { title: "deneme", content: "Lorem ipsum dolor sit amet" },
    { title: "deneme", content: "Lorem ipsum dolor sit amet" },
    { title: "deneme", content: "Lorem ipsum dolor sit amet" },
];

export default function InfoCardsComp({ cardsInfoArr = dummy }) {
    function generateCards() {
        if (cardsInfoArr !== undefined && cardsInfoArr.length > 0) {
            return cardsInfoArr.map((item, index) => {
                return <Card title={item.title} content={item.content}></Card>;
            });
        }
    }
    return (
        <Container fluid className="card-main-container">
            <Row className="card-deck">
                <Row className="info-row-1">
                    <Col
                        xs={12}
                        lg={7}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <div className="title-row">
                            <h1>Here comes the title</h1>
                            <h2>
                                You may write the subtitle here to give more
                                detail about what is told in this component
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse placerat felis vel
                                diam laoreet, ac pretium augue fermentum. Nam
                                nec dictum nunc. Aliquam tincidunt urna ut
                                pulvinar sodales. Nam dignissim luctus
                                consequat. Sed eget libero sed quam ornare
                                porttitor. Integer non metus imperdiet risus
                                efficitur semper tristique ac nulla. Vestibulum
                                venenatis sem in interdum ornare. Fusce rutrum
                                molestie magna eu cursus. Nulla facilisis
                                volutpat convallis. Integer ex sem, dignissim
                                quis ex at, congue egestas lacus. Pellentesque
                                gravida neque at consectetur aliquam.
                                Pellentesque interdum eget ligula id lobortis.
                                Aliquam et tempor augue, eu aliquam arcu. Fusce
                                nec imperdiet odio. Mauris aliquam porttitor
                                elit, at vestibulum mi mattis a. Nam et
                                facilisis sem, ac eleifend nisl.
                            </p>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        lg={5}
                        style={{ display: "flex", position: "relative" }}
                    >
                        <img
                            id="beekeeper-1"
                            src={illustration}
                            alt="beekeeper illustration"
                            className="illustration"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col
                        xs={12}
                        lg={5}
                        style={{ display: "flex", position: "relative" }}
                    >
                        <img
                            id="beekeeper-2"
                            src={illustration2}
                            alt="beekeeper illustration honeycomb"
                            className="illustration"
                        />
                    </Col>
                    <Col xs={12} lg={7}>
                        <div className="title-row">
                            <h1>Here comes the title</h1>
                            <h2>
                                You may write the subtitle here to give more
                                detail about what is told in this component
                            </h2>
                        </div>
                        <div class="grid">
                            <ul id="hexGrid">{generateCards()}</ul>
                        </div>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

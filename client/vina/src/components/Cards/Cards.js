import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Cards.css";
import Card from "./Card";
import illustration from "../../assets/illustration_new.png";
import illustration2 from "../../assets/illustration2_new.png";
const dummy = [
    {
        title: "İnovasyon ",
        content: " İnovatif arı zehri toplama teknolojisi",
    },
    {
        title: "Verim",
        content:
            "İnovatif teknoloji sayesinde kovan başına yüksek miktarda üretim",
    },
    {
        title: "Kalite",
        content: "Yüksek kaliteli arı zehri hasadı( >65 melittin oranı)",
    },
    { title: "Güven", content: "Arılara zarar vermeden arı zehri toplama" },
    {
        title: "Sertifika",
        content: "Laboratuvar onaylı ve sertifikalı arı zehri",
    },
];

export default function InfoCardsComp({ cardsInfoArr = dummy }) {
    function generateCards() {
        if (cardsInfoArr !== undefined && cardsInfoArr.length > 0) {
            return cardsInfoArr.map((item, index) => {
                return (
                    <Card
                        key={index}
                        title={item.title}
                        content={item.content}
                    ></Card>
                );
            });
        }
    }
    return (
        <Container
            fluid
            id="card-main-container"
            className="card-main-container"
        >
            <Row className="card-deck">
                <Row className="info-row-1">
                    <Col
                        xs={12}
                        lg={7}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <div className="title-row">
                            <h1>Ar-Ge'ye Önem Veriyoruz</h1>
                            <h2>
                                Üretimi kendi geliştirdiğimiz araç ve gereçlerle
                                çok daha üst seviyeye taşıyoruz
                            </h2>
                            <p>
                                Ar-Ge çalışmalarımız sonucunda geliştirdiğimiz
                                yenilikçi arı zehri aparatımız sayesinde yüksek
                                miktarda ve kaliteli arı zehri hasadı
                                gerçekleştiriyoruz. Sözleşmeli arıcılarımıza
                                aparat ve ekip desteği sağlıyoruz. İş
                                ortaklımızı yatırım ve operasyon maliyeti
                                olmadan arı zehri hasadı sürecine dahil
                                ediyoruz. İşlem gerçekleştirilen kovan sayısı
                                ile orantılı olarak iş ortaklarımıza komisyon
                                ödemesini gerçekleştiriyoruz. Topladığımız arı
                                zehrinin uygun şartlarda depolanmasını
                                sağlıyoruz. Yetkili laboratuvarlarda Kalite
                                kontrollerini gerçekleştirdiğimiz arı zehrini
                                tedariğini sağlıyoruz.
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
                            <h1>Değerlerimiz</h1>
                            <h2>
                                Yaptığımız işi en üst seviyeye taşımak için
                                çalışıyor, değerlerimizden ödün vermiyoruz
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

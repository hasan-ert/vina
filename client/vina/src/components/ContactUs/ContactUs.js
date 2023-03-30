import React, { useCallback, useEffect, useState } from "react";

//mailer
import emailjs from "@emailjs/browser";

//components
import { Col, Container, Form, FormGroup, Row, Spinner } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton.tsx";

//style
import "./ContactUs.css";

//initial attributes for form
const initial_form = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    interest: "",
    country_code: "",
    phone_num: "",
    message: "",
};

//
const emailerCredentials = {
    service_id: "service_twrsefc",
    template_id: "template_ci0yrgf",
    user_id: "5covigJB-76r4Ng8J",
};

export default function ContactUs() {
    const [formData, setFormData] = useState(initial_form);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormData = useCallback((item) => {
        setFormData({ ...formData, [item.name]: item.value });
    }, []);

    const toggleLoader = (e) => {
        setIsLoading(e);
    };

    useEffect(() => {
        handleFormData({
            name: "phone",
            value: "+" + formData.country_code + formData.phone_num,
        });
    }, [formData.phone_num, formData.country_code, handleFormData]);

    const submitForm = (e) => {
        e.preventDefault();
        toggleLoader(true);
        emailjs
            .send(
                emailerCredentials.service_id,
                emailerCredentials.template_id,
                formData,
                emailerCredentials.user_id
            )
            .then((res) => {
                alert("Successfully sent: ", res.text);
                toggleLoader(false);
            })
            .catch((err) => {
                alert("An error occured while sending: ", err.text);
                toggleLoader(false);
            });
    };
    return (
        <>
            <Container className="contact-main-container">
                <Row className="contact-title-row">
                    <h2>Bize Ulaşın</h2>
                    <h3>İş ortaklığı ve ürünlerimizle ilgili bize ulaşın</h3>
                </Row>
                <Row className="contact-main-row">
                    <Col xs={12} lg={4} className="contact-info-col">
                        <Row>
                            <Col xs={12}>
                                <h3>İletişim Bilgileri</h3>
                            </Col>
                            <Col xs={12}>
                                <p>
                                    Formu doldurduğunuzda takımımız 24 saat
                                    içerisinde size dönecektir
                                </p>
                            </Col>
                            <Col xs={12} className="info-rows">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-geo-alt"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <p> Biga/Çanakkale – İstanbul </p>
                            </Col>
                            {/* <Col xs={12} className="info-rows">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-telephone"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <p> +90 505 505 55 55 </p>
                            </Col> */}
                            <Col xs={12} className="info-rows">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-envelope-at"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                </svg>
                                <p>ilker.asik@vinabeenom.com</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={8} className="contact-form-main-col">
                        <Form
                            className="contact-form"
                            onSubmit={(e) => {
                                submitForm(e);
                            }}
                        >
                            <Row>
                                <Col xs={12} lg={6}>
                                    <Form.Group
                                        className="mb-3 form-group"
                                        controlId="form-name"
                                    >
                                        <Form.Label className="mr-auto">
                                            İsim
                                        </Form.Label>
                                        <Form.Control
                                            type="normal"
                                            name="name"
                                            placeholder="Your name"
                                            onChange={(e) => {
                                                handleFormData(e.target);
                                            }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Group
                                        className="mb-3 form-group"
                                        controlId="form-surname"
                                    >
                                        <Form.Label>Soyisim</Form.Label>
                                        <Form.Control
                                            type="normal"
                                            placeholder="Your surname"
                                            name="surname"
                                            onChange={(e) => {
                                                handleFormData(e.target);
                                            }}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Group
                                        className="mb-3 form-group"
                                        controlId="form-email"
                                    >
                                        <Form.Label>Email Adresi</Form.Label>
                                        <Form.Control
                                            type="email form-group"
                                            placeholder="Your email"
                                            required
                                            name="email"
                                            onChange={(e) => {
                                                handleFormData(e.target);
                                            }}
                                        />
                                        <Form.Text className="text-muted">
                                            Email bilgileriniz kimseyle
                                            paylaşılmamaktadır
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Group
                                        className="mb-3 form-group"
                                        controlId="form-phone"
                                    >
                                        <Form.Label>
                                            Telefon Numarası
                                        </Form.Label>
                                        <Row>
                                            <Col xs={1}>
                                                <p className="country-code-indicator">
                                                    +
                                                </p>
                                            </Col>
                                            <Col
                                                xs={2}
                                                style={{ padding: "0" }}
                                            >
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Kod"
                                                    // pattern="/(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/
                                                    // "
                                                    name="phone"
                                                    onChange={(e) => {
                                                        handleFormData({
                                                            name: "country_code",
                                                            value: e.target
                                                                .value,
                                                        });
                                                    }}
                                                />
                                            </Col>
                                            <Col
                                                xs={9}
                                                style={{ paddingRight: "0" }}
                                            >
                                                <Form.Control
                                                    type="tel"
                                                    placeholder="Numaranız"
                                                    // pattern="/(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/
                                                    // "
                                                    name="phone_num"
                                                    onChange={(e) => {
                                                        handleFormData(
                                                            e.target
                                                        );
                                                    }}
                                                />
                                            </Col>
                                        </Row>

                                        <Form.Text className="text-muted">
                                            Lütfen ülke kodunu başa ekleyiniz
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Group
                                        className="mb-3 form-group"
                                        controlId="form-interest"
                                    >
                                        <Form.Label>
                                            Neyle ilgileniyorsunuz
                                        </Form.Label>
                                        <Form.Check
                                            label="İş ortaklığı"
                                            name="group1"
                                            type="radio"
                                            id={`inline-radio-1`}
                                            onClick={(e) => {
                                                handleFormData({
                                                    name: "interest",
                                                    value: "Partnership",
                                                });
                                            }}
                                        />
                                        <Form.Check
                                            label="Ürünler"
                                            name="group1"
                                            type={"radio"}
                                            onClick={(e) => {
                                                handleFormData({
                                                    name: "interest",
                                                    value: "Products",
                                                });
                                            }}
                                            id={`inline-radio-2`}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group
                                        className="mb-3 form-group"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Mesajınız</Form.Label>

                                        <Form.Control
                                            as="textarea"
                                            style={{ height: "150px" }}
                                            name="message"
                                            onChange={(e) => {
                                                handleFormData(e.target);
                                            }}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <CustomButton type="submit">
                                {isLoading ? (
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        style={{ margin: "auto" }}
                                    ></Spinner>
                                ) : (
                                    ""
                                )}
                                Gönder
                            </CustomButton>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

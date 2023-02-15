import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Card.css";

export default function InfoCard({ title, content }) {
    return (
        <>
            <li class="hex">
                <div class="hexIn">
                    <div class="hexCard" href="#">
                        <h1 id="demo1">{title}</h1>
                        <p id="demo2">{content}</p>
                    </div>
                </div>
            </li>
        </>
    );
}

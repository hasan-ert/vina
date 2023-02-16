import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Card.css";

export default function InfoCard({ title, content, ...others }) {
    return (
        <>
            <li className="hex" key={others.key}>
                <div className="hexIn">
                    <div className="hexCard" href="#">
                        <h1 id="demo1">{title}</h1>
                        <p id="demo2">{content}</p>
                    </div>
                </div>
            </li>
        </>
    );
}

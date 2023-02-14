import React from 'react'
import { Container, Col } from 'react-bootstrap'
import "./Cards.css"
import Card from "./Card"

export default function InfoCardsComp({cardsInfoArr = [{title: "Deneme Icin Girilmis Bir Card", content:"Lorem ipsum dolor sit amet"},{title: "deneme", content:"Lorem ipsum dolor sit amet"}]}){
    
    function generateCards(){
        if(cardsInfoArr !== undefined && cardsInfoArr.length > 0)
        {
            return cardsInfoArr.map((item,index) => {
                return <Card title={item.title} content={item.content}></Card>
            })

        }

    }
    return (
    <>
    <Container>
        {generateCards()}
    </Container>
    </>
    )
}
import Card from 'react-bootstrap/Card'
import React from 'react'
import { Buttons, Button } from './cardElements'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/images/innovation-logo.png'

export const OpportunityCard = (props) => {
    /* Opportunity cards should have a:
        - description
        - date
        - salary
        - location
    */
  
    return (
        <Card border="light" text='light' bg='dark' style={{
            width: '15rem', borderRadius: '25px'
        }}>
            <Card.Img variant="top" alt='Example pic' src={logo} height='200px' />
            <Card.Body>
                <Card.Title>
                    <h3>{props.title}</h3></Card.Title>
                <Card.Text marginBottom='0'>
                    DESCRIPTION: {props.desc}<br />
                        DATE: {props.date}<br />
                        LOCATION: {props.location}<br />
                        SALARY:  {props.salary}<br />
                </Card.Text>
                <Buttons>
                    <Button backgroundColor='#256de1'>Apply</Button>
                    <Button backgroundColor='#dabb0e'>Favourite ({props.favs})</Button>
                </Buttons>
            </Card.Body>
        </Card>
    );
}


export default OpportunityCard;

import Card from 'react-bootstrap/Card'
import React from 'react'
import { Buttons, Button } from './cardElements'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/images/innovation-logo.png'
class OpportunityCard extends React.Component {
    /* Opportunity cards should have a:
        - description
        - date
        - salary
        - location
    */

    render() {
        return (
            <Card border="light" text='light' bg='dark' style={{
                width: '15rem', borderRadius: '25px'
            }}>
                <Card.Img variant="top" alt='Example pic' src={logo} height='200px' />
                <Card.Body>
                    <Card.Title>
                        <h3>{this.props.title}</h3></Card.Title>
                    <Card.Text marginBottom='0'>
                        DESCRIPTION: {this.props.desc}<br />
                        DATE: {this.props.date}<br />
                        LOCATION: {this.props.location}<br />
                        SALARY:  {this.props.salary}<br />
                    </Card.Text>
                    <Buttons>
                        <Button backgroundColor='#256de1'>Apply</Button>
                        <Button backgroundColor='#dabb0e'>Favourite ({this.props.favs})</Button>
                    </Buttons>
                </Card.Body>
            </Card>
        );
    }
}

export default OpportunityCard;

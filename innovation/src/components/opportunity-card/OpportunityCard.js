import Card from 'react-bootstrap/Card'
import React from 'react'
import { Button } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
class OpportunityCard extends React.Component {
    /* Opportunity cards should have a:
        - description
        - date
        - salary
        - location
    */

    render() {
        return (
            <CardGroup>
                <Card border='light' text='light' bg='dark' style={{
                    width: '15rem', borderRadius: '20px', maxHeight: '300px', margin: '5px'
                }}>
                    <Card.Img variant="top" alt='Example pic' src={this.props.image_src} />
                    <Card.Body>
                        <Card.Title> {this.props.title}</Card.Title>
                        <Card.Text>
                            Description: {this.props.desc}{"\n"}
                            DATE: {this.props.date}{"\n"}
                            SALARY:  {this.props.salary}{"\n"}
                            LOCATION: {this.props.location}{"\n"}
                        </Card.Text>
                        <Button variant="primary">
                            Apply!
                        </Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        );
    }
}

export default OpportunityCard;

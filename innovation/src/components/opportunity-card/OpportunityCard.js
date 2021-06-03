import Card from 'react-bootstrap/Card'
import React from 'react'
import { Button } from 'react-bootstrap'
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
                <Card border='light' text = 'light' bg='dark' style={{
                width: '18rem', borderRadius: '20px'
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
        );
    }
}

export default OpportunityCard;
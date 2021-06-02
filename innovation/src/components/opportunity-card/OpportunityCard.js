import Card from 'react-bootstrap/Card'
class opportunityCard extends React.Component {
    /* Opportunity cards should have a:
        - description
        - date
        - salary
        - location
    */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.image_src} />
                <Card.Body>
                    <Card.Title> {this.props.title}</Card.Title>
                    <Card.Text>
                        {"Description: " + this.props.desc + "\n"}
                        + {"DATE: " + this.props.date + '\n'}
                            + { "SALARY: " + this.props.salary + '\n' }
                        + {"LOCATION: " + this.props.location + '\n'}
                    </Card.Text>
                    <Button variant="primary">
                        Apply!
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
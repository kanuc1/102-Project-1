import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './listing.css';

export default function Listing(props) {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} class = "card-img" />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.category}
            </Card.Text>
            <Button variant="success" href = {props.link}>View Menu</Button>
            </Card.Body>
        </Card>
        </div>
    )
}


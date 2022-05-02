import {Card, Button} from 'react-bootstrap';
const Item = ({title, price, image}) => {
    return(      
               <Card className='col-md-4' style={{width: '18rem'}}>
                    <Card.Img variant="top" src={require(`${image}`)} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Button variant="primary">$ {price}</Button>
                    </Card.Body>
                </Card>
    );
}

export default Item;
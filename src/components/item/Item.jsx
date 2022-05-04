import {Card, Button} from 'react-bootstrap';
const Item = ({title, price, image}) => {
    return(      
               <Card className='col-md-4' style={{width: '18rem'}}>
                    <Card.Img className='img-fluid p-2' variant="top" src={require(`${image}`)} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>$ {price}</Card.Text>
                        <Button variant="primary">Ver Producto</Button>
                    </Card.Body>
                </Card>
    );
}

export default Item;
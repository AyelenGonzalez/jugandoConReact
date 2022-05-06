import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';

const Item = ({id, title, price, image}) => {
    return(      
               <Card className='col-md-4' style={{width: '18rem'}}>
                    <Card.Img className='img-fluid p-2' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>$ {price}</Card.Text>
                        <Link to={`/item/${id}`} variant="primary" className='btn btn-primary'>Ver Producto</Link>
                    </Card.Body>
                </Card>
    );
}

export default Item;
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, price, image, category } = product;

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={image} height={350} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex justify-content-between align-middle mb-3'>
                        <Card.Subtitle>{category}</Card.Subtitle>
                        <Card.Subtitle>
                            Price: ${price}
                        </Card.Subtitle>
                    </div>
                    <Link to={`/products/product/${id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;
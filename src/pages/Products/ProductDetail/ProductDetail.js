import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { removeProduct, singleProduct } from '../../../features/productsReducer';
import './ProductDetail.css';

const ProductDetail = () => {
    const product = useSelector((state) => state.products.value.singleProduct);          //get data
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => dispatch(singleProduct(json)))
        dispatch(removeProduct());
    }, [productId, dispatch]);

    const { title, price, category, description, image } = product;

    return (
        <Container>
            <Row>
                <Col xs={12} md={8} lg={6} className="mx-auto">
                    <Card className='h-100'>
                        <Card.Img variant="top" src={image} height={550} />
                        <Card.Body>
                            <Card.Title className='mb-3'>{title}</Card.Title>
                            <Card.Subtitle>Category: {category}</Card.Subtitle>
                            <Card.Text>{description}</Card.Text>
                            <Card.Text>
                                Price: ${price}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/products`}>
                                <Button variant="primary">Back</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
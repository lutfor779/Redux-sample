import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { allProducts, loading } from '../../../features/productsReducer';

import Product from '../Product/Product';

const Products = () => {
    const products = useSelector((state) => state.products.value.allProducts);          //get data
    const isLoading = useSelector((state) => state.products.value.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                dispatch(allProducts(json));
                dispatch(loading(false))
            })     //set data

    }, [dispatch]);


    return (
        isLoading ? <div className='pt-5 align-middle'>
            <strong className='fs-2'>Loading</strong>
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="warning" size="sm" />
            <Spinner animation="grow" variant="success" size="sm" />
        </div> : <div>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;
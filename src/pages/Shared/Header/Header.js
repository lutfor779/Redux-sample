import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className='mb-5'>
            <Navigation />
        </div>
    );
};

export default Header;
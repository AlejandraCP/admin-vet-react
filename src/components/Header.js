import React from 'react';
import PropTypes from 'prop-types';

const Header = props => <h2 className='text-center'>{props.title}</h2>

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
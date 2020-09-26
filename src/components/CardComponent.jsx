import React from 'react';
import './CardComponent.css'
import PropTypes from 'prop-types'

const CardComponent = ({name, imgSrc}) => {

  return (
    <div className="card-container">
      <h3>{name}</h3>
      <div className="content">
        <img className="phone-image" src={imgSrc} alt={name + 'phone image'}/>
      </div>
      <p>Click me for more details</p>
    </div>
  )           
}

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}

export default CardComponent;

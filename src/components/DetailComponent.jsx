import React from 'react';
import {IMAGES_DIR} from '../constants';
import './DetailComponent.css';
import PropTypes from 'prop-types'

const DetailComponent = ({phone, setPhone, history}) => {
  
  const goBack = () => {
    setPhone({})
    history.goBack();
  }
  
  return (
    <div className="card-container-detail" data-cy="card-details">

        <img className="phone-image" src={IMAGES_DIR + phone.imageFileName} alt={phone.name + 'phone image'}/>
        <div className="details-container">
          <h2>{phone.name}</h2>
          <p>{phone.description}</p>
          <p>Color: {phone.color}</p>
          <p>Screen: {phone.screen}</p>
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram}</p>
          <p>Price: {phone.price}$</p>

          <button data-cy="btn-go-back" onClick={() => goBack()}> Go back</button>
        </div>

    </div>
  )           
}

DetailComponent.propTypes = {
  phone: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    screen: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    processor: PropTypes.string.isRequired,
    ram: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  setPhone: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default DetailComponent;

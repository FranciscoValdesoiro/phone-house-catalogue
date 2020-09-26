import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from './CardComponent';
import shortid from 'shortid'
import PropTypes from 'prop-types'
import {IMAGES_DIR} from '../constants'
import './PhoneListComponent.css'

const PhoneListComponent = ({ phones, setPhone}) => {

	return (
		<div>
			<div className="phones-container">
				{
					phones.map(phone => {
						let phoneName
						if(typeof phone.name  === 'string'){
							phoneName = phone.name.toLowerCase().replace(/ /g,'_').replace(/./,'')
						}
						const id = shortid.generate()
						return(
							<Link to={`/detail/${phoneName}`} data-cy={`${phoneName}-card`} key={id} onClick={() => setPhone(phone)}>
								<CardComponent name={phone.name} imgSrc={IMAGES_DIR + phone.imageFileName} />
							</Link>
						)
					})
				}
			</div>
		</div>
	);
}

PhoneListComponent.propTypes = {
    phones: PropTypes.array.isRequired,
    setPhone: PropTypes.func.isRequired
}

export default PhoneListComponent;

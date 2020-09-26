import React from 'react';
import './HeaderComponent.css';
import {IMAGES_DIR} from '../constants'

const HeaderComponent = ({title, img}) => {
  
  return (
    <header className="header">
      <div className="header-inner">
        <img src={IMAGES_DIR + img} alt='logo'/>
        <p>{title}</p>
      </div>
    </header>
  )           
}

export default HeaderComponent;

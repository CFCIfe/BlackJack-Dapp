import logo from '../logo.svg'
import React from 'react';

import './loader.css'

export function Loader(){
  return <img src={logo} className='loader' alt='loader'/>
}
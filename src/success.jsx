import React from 'react'
import './styles/success'
import Check from './images/icon-check.svg'

export default function Success({close}) {

  return(
    <div className='success-block'>
        <div className='success-modal-content'>
          <Check className='success-check' />
          <span className='success-title'>Thanks for your support!</span>
          <p className='success-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc lacinia feugiat nulla sed accumsan. Vestibulum cursus in tellus nec
            viverra.
          </p>
          <div className='success-modal-button' onClick={close}>Got it!</div>
        </div>
      </div>
  )
}
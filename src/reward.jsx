import React, { useState } from 'react'
import './styles/reward'
import check from './images/icon-check.svg'

export default function Reward({ title, minPledge, text, left }) {
  const [openModal, setOpenModal] = useState(false)
  const toggleOpenModal = () => setOpenModal(!openModal)

  return (
    <div className='reward-block'>
      <div className='reward-row'>
        <h2>{title}</h2>
        <div className='reward-pledge'>Pledge ${minPledge} or more</div>
      </div>
      <div>{text}</div>
      {openModal ? <div className='reward-modal'>
        <div className='reward-modal-content'>
          <img src={check} className='reward-check' />
          <span className='reward-title'>Thanks for your support!</span>
          <p className='reward-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc lacinia feugiat nulla sed accumsan. Vestibulum cursus in tellus nec
            viverra.
          </p>
          <div className='reward-modal-button' onClick={toggleOpenModal}>Got it!</div>
        </div>
      </div> : null}
      <div className='reward-row'>
        <div className='reward-left'>
          <span className='reward-left-count'>{left}</span>
          <span>left</span>
        </div>

        <div className='reward-button' onClick={toggleOpenModal}>Select Reward</div>
      </div>
    </div>
  )
}
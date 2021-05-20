import React, { useState } from 'react'
import './styles/reward'
import Success from './success'

export default function Reward({ title, minPledge, text, left, modal, toggle, selected, close, addAmount }) {
  const [openModal, setOpenModal] = useState(false)
  const toggleOpenModal = () => setOpenModal(!openModal)

  const [pledge, setPledge] = useState(minPledge)

  return (
    <div
      className={modal ? 'reward-block-modal' : 'reward-block'}
      onClick={modal ? toggle : null}>
      <div className={modal ? 'reward-modal' : 'reward-row'}>
        {modal ? <label className="container">
          <input type="radio" name="radio" checked={selected} />
          <span className="checkmark" ></span>
        </label> : null}
        <h4 className='reward-title-modal'>{title}</h4>
        <div className='reward-pledge'>Pledge ${minPledge} or more</div>
      </div>

      <div className={modal ? 'reward-text-modal' : 'reward-text'}>{text}</div>

      {selected ? <div className='reward-modal-bottom'>
        <span>Enter your pledge</span>
        <div className='reward-modal-input-outline'>
          <label ><b>$</b></label>
          <input
            type="input"
            className='reward-modal-input'
            name="firstname"
            value={pledge}
            onChange={(event) => setPledge(Number(event.target.value)) } 
          />
        </div>
        <div
          className={modal ? 'reward-button-modal' : 'reward-button'}
          onClick={() => {toggleOpenModal(); addAmount(pledge)} }
        >
          {modal ? 'Continue' : 'Select Reward'}
        </div>
      </div> : null}

      {openModal ? <Success close={modal ? close : toggleOpenModal} /> : null}

      <div className='reward-left'>
        <span className='reward-left-count'>{left}</span>
        <span>left</span>
      </div>

      <div
        className={modal ? null : 'reward-button'}
        onClick={modal ? null : () => { toggleOpenModal(); addAmount(minPledge)} }
      >
        {modal ? null : 'Select Reward'}
      </div>

    </div>
  )
}
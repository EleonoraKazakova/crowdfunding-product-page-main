import React, { useState } from 'react'
import './styles/reward'
import Success from './success'

export default function Reward({ title, minPledge, text, left, modal, toggle, selected, close, addAmount }) {
  const [openModal, setOpenModal] = useState(false)
  const toggleOpenModal = () => setOpenModal(!openModal)

  const [pledge, setPledge] = useState(minPledge)

  return (
    <div
      className={`${modal ? 'reward-block-modal' : 'reward-block'} ${left === 0 ? 'reward-block-inactive' : ''}`}
      onClick={modal && left !== 0 ? toggle : null}
    >
      <div className='reward-row'>
        {modal ? <label className="container">
          <input type="radio" name="radio" checked={selected} />
          <span className="checkmark" ></span>
        </label> : null}
        <h4 className='reward-title-modal'>{title}</h4>
        {minPledge > 0 ? <div className='reward-pledge'>Pledge ${minPledge} or more</div> : null}
      </div>

      <div className='reward-text'>{text}</div>

      {selected ? <div className='reward-modal-bottom'>
        <span>Enter your pledge</span>
        <div className='reward-modal-input-outline'>
          <label ><b>$</b></label>
          <input
            type="input"
            className='reward-modal-input'
            name="firstname"
            value={pledge}
            onChange={(event) => setPledge(Number(event.target.value))}
          />
        </div>
        <div
          className='reward-button'
          onClick={() => { toggleOpenModal(); addAmount(pledge) }}
        >
          Continue
        </div>
      </div> : null}

      {openModal ? <Success close={modal ? close : toggleOpenModal} /> : null}

      {
        left !== null
          ? <div className='reward-left'>
            <span className='reward-left-count'>{left}</span>
            <span>left</span>
          </div>
          : null
      }

      {
        modal
          ? null
          : <div
            className={`reward-button ${left === 0 ? 'reward-button-inactive' : ''}`}
            onClick={left === 0 ? null : () => { toggleOpenModal(); addAmount(minPledge) }}
          >
            {left === 0 ? 'Out of stock' : 'Select Reward'}
          </div>
      }

    </div>
  )
}
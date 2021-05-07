import React from 'react'
import './styles/reward'

export default function Reward({ title, minPledge, text, left }) {

  return (
    <div className='reward-block'>
      <div className='reward-row'>
        <h2>{title}</h2>
        <div className='reward-pledge'>Pledge ${minPledge} or more</div>
      </div>
      <div>{text}</div>
      <div className='reward-row'>
        <div className='reward-left'>
          <span className='reward-left-count'>{left}</span>
          <span>left</span>
        </div>
        <div className='reward-button'>Select Reward</div>
      </div>
    </div>
  )
}
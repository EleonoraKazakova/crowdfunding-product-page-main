import React, { useState } from 'react'
import './styles/dataReward'
import Reward from './reward'

export default function DataReward({ modal, close }) {

  const [selectedReward, setSelectedReward] = useState(0)

  return (
    <div className='dataReward-rewards'>

      <Reward
        title='Bamboo Stand'
        minPledge={25}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={101}
        modal={modal}
        toggle={() => setSelectedReward(1)}
        selected={selectedReward === 1}
        close={close}
      />

      <Reward
        title='Black Edition Stand'
        minPledge={75}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={64}
        modal={modal}
        toggle={() => setSelectedReward(2)}
        selected={selectedReward === 2}
        close={close}
      />

      <Reward
        title='Mahogany Special Edition'
        minPledge={200}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={0}
        modal={modal}
        toggle={() => setSelectedReward(3)}
        selected={selectedReward === 3}
        close={close}
      />

    </div>
  )
}
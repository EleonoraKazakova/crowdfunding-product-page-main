import React, { useState } from 'react'
import './styles/dataReward'
import Reward from './reward'

export default function DataReward({ modal, close, addAmount, amountLeft, setAmountLeft }) {

  const [selectedReward, setSelectedReward] = useState(-1)

  return (
    <div className='dataReward-rewards'>
      {modal ? <Reward
        title='Pledge with no reward'
        minPledge={0}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={null}
        modal={modal}
        toggle={() => setSelectedReward(0)}
        selected={selectedReward === 0}
        close={close}
        addAmount={(pledge) => { addAmount(pledge); }}
      /> : null}
      <Reward
        title='Bamboo Stand'
        minPledge={25}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={amountLeft[25]}
        modal={modal}
        toggle={() => setSelectedReward(1)}
        selected={selectedReward === 1}
        close={close}
        addAmount={(pledge) => { addAmount(pledge); setAmountLeft({ ...amountLeft, 25: amountLeft[25] - 1 }) }}
      />

      <Reward
        title='Black Edition Stand'
        minPledge={75}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={amountLeft[75]}
        modal={modal}
        toggle={() => setSelectedReward(2)}
        selected={selectedReward === 2}
        close={close}
        addAmount={(pledge) => { addAmount(pledge); setAmountLeft({ ...amountLeft, 75: amountLeft[75] - 1 }) }}
      />

      <Reward
        title='Mahogany Special Edition'
        minPledge={200}
        text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
        left={amountLeft[200]}
        modal={modal}
        toggle={() => setSelectedReward(3)}
        selected={selectedReward === 3}
        close={close}
        addAmount={(pledge) => { addAmount(pledge); setAmountLeft({ ...amountLeft, 200: amountLeft[200] - 1 }) }}
      />

    </div>
  )
}
import React, { useState } from 'react'
import './styles/app'
import logo from './images/logo-mastercraft.svg'
import bookmark from './images/icon-bookmark.svg'
import DataReward from './dataReward'

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const toggleOpenModal = () => setOpenModal(!openModal)

  const [amount, setAmount] = useState(89914)
  const [backers, setBackers] = useState(5007)

  const addAmount = (pledge) => {
    setAmount(amount + pledge)
    setBackers(backers + 1)
  }

  const [amountLeft, setAmountLeft] = useState({ 25: 101, 75: 64, 200: 0 })

  const percentProgressBar = amount * 100 / 100000


  return (
    <div className='grid'>
      <div className='header'></div>

      <div className='menu'>
        <div className='crowndfun'>crowdfund</div>
        <div className='itemsMenu'>
          <div>About</div>
          <div>Discover</div>
          <div>Get Started</div>
        </div>
      </div>

      <div className='content'>
        <div className='block titleBlock'>
          <img src={logo} className='logo' />
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p className='subtitle'>
            A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.
          </p>
          <div className='buttonRow'>
            {openModal ? <div className='modal'>
              <div className='modal-content'>

                <h2>Back this project</h2>
                <div>Pledge with no reward</div>
                <DataReward
                  modal={true}
                  close={toggleOpenModal}
                  addAmount={addAmount}
                  amountLeft={amountLeft}
                  setAmountLeft={setAmountLeft}
                />
              </div>

            </div> : null}
            <div className='buttonModalWindow' onClick={toggleOpenModal}>Back this project</div>
            <div className='buttonBookmark'>
              <img src={bookmark} alt="" />
              Bookmark
            </div>
          </div>
        </div>

        <div className='block'>

          <div className='count'>
            <div className='countPart'>
              <span className='countText'>${amount.toLocaleString('en-US')}</span>
              <span>of $100,000 backed</span>
            </div>
            <div className='line'></div>
            <div className='countPart'>
              <span className='countText'>{backers.toLocaleString('en-US')}</span>
              <span>total backers</span>
            </div>
            <div className='line'></div>
            <div className='countPart'>
              <span className='countText'>56</span>
              <span>days left</span>
            </div>

          </div>
          <div className='progressBar'>
            <div
              className='progressBarActive'
              style={{ width: Math.min(percentProgressBar, 100)+ '%' }}>
            </div>
          </div>

        </div>
        <div className='block'>
          <h2>About this project</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc lacinia feugiat nulla sed accumsan. Vestibulum cursus in tellus nec
            viverra. Aliquam erat volutpat. Pellentesque commodo, eros a
            pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
            rhoncus mauris. Sed ornare aliquet lorem. Nullam suscipit sed augue
            ac efficitur. Cras pretium massa non porttitor blandit. Sed ut
            euismod velit. Praesent eleifend dolor eget nisl pellentesque,
            vitae egestas arcu aliquet. Nam ultricies fringilla aliquet.
            Cras venenatis porttitor leo, vel interdum arcu ornare id.
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Nulla ultricies posuere est.
          </p>

          <DataReward
            modal={false}
            addAmount={addAmount}
            amountLeft={amountLeft}
            setAmountLeft={setAmountLeft}
          />


        </div>

      </div>
    </div>
  )
}
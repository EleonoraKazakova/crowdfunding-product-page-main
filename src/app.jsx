import React, { useState } from 'react'
import './styles/app'

import Logo from './images/logo-mastercraft.svg'
import CloseSign from './images/icon-close-modal.svg'
import Bookmark from './images/icon-bookmark.svg'
import DataReward from './dataReward'
import Hamburger from './images/icon-hamburger.svg'

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

  const [bookmark, setBookmark] = useState(false)
  const toggleBookmark = () => setBookmark(!bookmark)

  return (
    <div className='app-grid'>
      <div className='app-header'></div>

      <div className='app-menu'>
        <p className='app-crowdfund'>crowdfund</p>
        <div className='app-itemsMenu'>
          <div>About</div>
          <div>Discover</div>
          <div>Get Started</div>
        </div>
        <Hamburger className='app-hamburger' />
      </div>

      <div className='app-content'>
        <div className='app-block app-titleBlock'>
          <Logo className='app-logo' />
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p className='app-subtitle'>
            A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.
          </p>
          <div className='app-buttonRow'>
            {openModal ? <div className='app-modal' onClick={toggleOpenModal}>
              <div className='app-modal-content' onClick={(event) => event.stopPropagation()}>
                <div className='app-title'>
                  <CloseSign className='app-closeSign' fill='black' onClick={toggleOpenModal} />
                  <h2>Back this project</h2>
                </div>
                <DataReward
                  modal={true}
                  close={toggleOpenModal}
                  addAmount={addAmount}
                  amountLeft={amountLeft}
                  setAmountLeft={setAmountLeft}
                />
              </div>

            </div> : null}
            <div className='app-buttonModalWindow' onClick={toggleOpenModal}>Back this project</div>

            <div className={`app-buttonBookmark ${bookmark ? 'app-buttonBookmarked' : ''}`} onClick={toggleBookmark}>
              <Bookmark />
              <div className='app-buttonBookmark-text'>{bookmark ? 'Bookmarked' : 'Bookmark'}</div>
            </div>

          </div>
        </div>

        <div className='app-block'>

          <div className='app-count'>
            <div className='app-countPart'>
              <span className='app-countText'>${amount.toLocaleString('en-US')}</span>
              <span>of $100,000 backed</span>
            </div>
            <div className='app-line'></div>
            <div className='app-countPart'>
              <span className='app-countText'>{backers.toLocaleString('en-US')}</span>
              <span>total backers</span>
            </div>
            <div className='app-line'></div>
            <div className='app-countPart'>
              <span className='app-countText'>56</span>
              <span>days left</span>
            </div>

          </div>
          <div className='app-progressBar'>
            <div
              className='app-progressBarActive'
              style={{ width: Math.min(percentProgressBar, 100) + '%' }}>
            </div>
          </div>

        </div>
        <div className='app-block'>
          <h2>About this project</h2>
          <div className='app-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc lacinia feugiat nulla sed accumsan. Vestibulum cursus in tellus nec
              viverra. Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris. Sed ornare aliquet lorem. Nullam suscipit sed augue
              ac efficitur.
            </p>
            <p>
              Cras pretium massa non porttitor blandit. Sed ut
              euismod velit. Praesent eleifend dolor eget nisl pellentesque,
              vitae egestas arcu aliquet. Nam ultricies fringilla aliquet.
              Cras venenatis porttitor leo, vel interdum arcu ornare id.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla ultricies posuere est.
            </p>
          </div>
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
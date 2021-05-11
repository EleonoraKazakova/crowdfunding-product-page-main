import React from 'react'
import './styles/app'
import logo from './images/logo-mastercraft.svg'
import bookmark from './images/icon-bookmark.svg'
import Reward from './reward'

export default function App() {

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
            <div className='buttonModalWindow'>Back this project</div>
            <div className='buttonBookmark'>
              <img src={bookmark} alt="" />
              Bookmark
            </div>
          </div>
        </div>

        <div className='block'>

          <div className='count'>
            <div className='countPart'>
              <span className='countText'>$89,914</span>
              <span>of $100,000 backed</span>
            </div>
            <div className='line'></div>
            <div className='countPart'>
              <span className='countText'>5,007</span>
              <span>total backers</span>
            </div>
            <div className='line'></div>
            <div className='countPart'>
              <span className='countText'>56</span>
              <span>days left</span>
            </div>

          </div>
          <div className='progressBar'>
            <div className='progressBarActive'></div>
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
          <div className='rewards'>
            <Reward
              title='Bamboo Stand'
              minPledge={25}
              text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
              left={101}
            />

            <Reward
              title='Black Edition Stand'
              minPledge={75}
              text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
              left={64}
            />

            <Reward
              title='Mahogany Special Edition'
              minPledge={200}
              text='Aliquam erat volutpat. Pellentesque commodo, eros a
              pharetra pharetra, ipsum mi convallis erat, non cursus ex augue
              rhoncus mauris.'
              left={0}
            />

          </div>
        </div>

      </div>
    </div>
  )
}
import React from 'react';
import './styles/styles';
import logo from './images/logo-mastercraft.svg';

export default function App() {

  return (
    <div className='grid'>
      <div className='header'></div>
      <div className='menu'></div>

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
              <img src="../images/icon-bookmark.svg" alt="" />
              Bookmark
            </div>
          </div>
        </div>

        <div className='block'>
          <span>$89,914</span>
          <span>of $100,000 backed</span>
          <span>5,007</span>
          <span>total backers</span>
          <span>56</span>
          <span>days left</span>
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
        </div>

      </div>
    </div>
  )
}
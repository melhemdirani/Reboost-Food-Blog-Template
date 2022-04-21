import React from 'react'

import './Map.style.scss'
import phone_icon from '../../assets/images/phone_icon.webp';
import location_icon from '../../assets/images/location_icon.webp';
import mail_icon from '../../assets/images/mail_icon.webp';


const Map = () => {
  return (
    <div className='Map_section'>
        <div className='content'>
            <h3 className=''>We love seeing your feedback</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Nunc tristique justo id elit bibendum pharetra non vitae lectus.
             Mauris libero felis, dapibus a ultrices sed, commodo vitae odio.
             Sed auctor tellus quis arcu tempus. Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Etiam ac tincidunt nunc. Cras sed mollis erat.</p>
        </div>
        <div className='content_details'>
             <img src={location_icon} alt='icon'/>
             <p>1481 Creekside Lane Avila Beach, CA 931</p>
             <img src={mail_icon} alt='icon'/>
             <p>yourmail@gmail.com</p>
             <img src={phone_icon} alt='icon'/>
             <p>+53 345 7953 32453</p>
        </div>
             <iframe className='map_area' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137'
              alt="map" allowFullScreen></iframe>        
    </div>
  )
}

export default Map
import React from 'react';

function Footer({ user }) {
    return (
        <div className="footer">
            <p className='footer-p'>©  All rights reserved!  </p>
            <div className="info">
                <h4> Contacts</h4>
              
                   <div>Medina Demirova </div> 
                   <div><i class="far fa-envelope"></i>E-mail: medinademirova@yahoo.com</div> 
                   <div><i class="fas fa-map-marker-alt"></i> Sofia, BG </div> 
                   <div><a href="https://github.com/MedinaDemirova/Teeth-Encyclopedia-">Repository: GitHub</a></div> 
              
            </div>
        </div>
    )
}

export default Footer;
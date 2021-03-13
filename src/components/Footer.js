import React from 'react';

function Footer({ user }) {
    return (
        <div className="footer">
            <p className='footer-p'> </p>
            <div className="info">
                <h4> Contacts</h4>
              
                   <div>Medina Demirova </div> 
                   <div>E-mail: medinademirova@yahoo.com</div> 
                   <div> Sofia, BG </div> 
                   <div><a href="https://github.com/MedinaDemirova/Teeth-Encyclopedia-">Repository: GitHub</a></div> 
                   <div>©  All rights reserved! </div>
              
            </div>
        </div>
    )
}

export default Footer;
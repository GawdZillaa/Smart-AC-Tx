import React from 'react';
import './Footer.css';

const Footer = ({
    footerText
}) =>{

    return(
        <div
            className="footerContainer"
        >
            <h6
                style={{
                    color:'grey',
                    marginRight:15
                }}
            >
                {footerText || ''}
            </h6>

        </div>
    )
}

export default Footer;
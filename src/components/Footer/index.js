import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink}
from './FooterElements';

const Footer = () => {
    return (
      <FooterContainer>
          <FooterWrap>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to="/">HamBurger</SocialLogo>
                      <SocialIcons>

                          <SocialIconLink href="/" target="-blank" aria-label="Facebook" 
                          rel="noopener noreferrer"> 
                          <FaFacebook/> 
                          </SocialIconLink>

                          <SocialIconLink href="/" target="-blank" aria-label="Instagram"  
                          rel="noopener noreferrer"> 
                          <FaInstagram/> 
                          </SocialIconLink>

                          <SocialIconLink href="/" target="-blank" aria-label="Youtube" 
                          rel="noopener noreferrer"> 
                          <FaYoutube/> 
                          </SocialIconLink>

                          <SocialIconLink href="/" target="-blank" aria-label="Twitter" 
                          rel="noopener noreferrer"> 
                          <FaTwitter/> 
                          </SocialIconLink>

                          <SocialIconLink href="/" target="-blank" aria-label="LinkedIn" 
                          rel="noopener noreferrer"> 
                          <FaLinkedin/> 
                          </SocialIconLink>

                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    )
}

export default Footer

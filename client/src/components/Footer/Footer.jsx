import React, { Fragment } from 'react';

import {
  FooterContainer,
  Fcontent,
  FooterMain,
  Lheader,
  Ldiv,
  Fdiv,
  Fli,
  Flic,
  Twit,
  Git,
  Ctext,
  Em,
  Tel,
  Ftext,
} from './Footer.styles';

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <FooterMain>
          <Fcontent>
            <Ftext>
              <Lheader>Cities</Lheader>
              <Ldiv />
              <Fli>Ikeja</Fli>
              <Fli>Badagry</Fli>
              <Fli>Lagos Island</Fli>
              <Fli>Epe</Fli>
              <Fli>Ikorodu</Fli>
            </Ftext>

            <Ftext>
              <Lheader>Menus</Lheader>
              <Ldiv />
              <Fli>African Dishes</Fli>
              <Fli>Intercontinental Dishes</Fli>
              <Fli>Smoothies</Fli>
              <Fli> Pastries</Fli>
            </Ftext>

            <Ftext>
              <Lheader>Links</Lheader>
              <Ldiv />
              <Fli>
                <a href="/menu"> Menu </a>
              </Fli>
              <Fli>Contact Us</Fli>
              <Fli>Make features request</Fli>
              <Fli>Privacy Policy</Fli>
            </Ftext>

            <Ftext>
              <Lheader>Connect</Lheader>
              <Ldiv />
              <Flic>
                <Twit /> <Git />
              </Flic>
              <Fli>
                <Tel /> +2348185436877
              </Fli>
              <Fli>
                <Em /> hello@foodtime.com
              </Fli>
            </Ftext>
          </Fcontent>
        </FooterMain>

        <Fdiv />

        <Ctext> &copy; Foodtime 2020 • Developed by DotmanL </Ctext>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;

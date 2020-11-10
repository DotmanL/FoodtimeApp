import React, { Fragment } from 'react';

import {
  Container,
  Header,
  Title,
  SubTitle,
  SubHeader,
  Content,
  Cheader,
  Ctext,
  SubContent,
  Citems,
  Ocontainer,
  Oheader,
  Oitems,
  Clabels,
  Ccontainer,
  Fooddrop,
  Basket,
  Menu,
  ViewMenu,
  MenuT,
  MenuButton,
} from './Homepage.styles';

import Search from '../../components/Search/Search';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';

const Homepage = () => {
  return (
    <Fragment>
      <Container>
        <Header>
          <Title> Order your meals from the Best Restaurants</Title>
          <SubTitle> Everywhere in Lagos</SubTitle>
          <Search />
          <a href="/menu">
            <MenuButton> Browse Menu </MenuButton>
          </a>
        </Header>

        <SubHeader>
          <SubContent>
            <CountUp start={0} end={30} />{' '}
            <p style={{ marginLeft: '5px' }}>Restaurants</p>
            <CountUp style={{ marginLeft: '50px' }} start={0} end={30} />{' '}
            <p style={{ marginLeft: '5px' }}> Registered Users</p>
          </SubContent>
        </SubHeader>

        <Content>
          <Cheader> What we offer ?</Cheader>
          <Ctext>
            At Foodtime, we make it easier for you to order various meals and
            drinks from various eateries all over Lagos, Nigeria. we enable
            catering outfits and eateries all over Lagos to put their meals and
            drinks online.{' '}
          </Ctext>

          <Citems>
            <Ocontainer>
              <Oheader> Easy 3 Steps Order </Oheader>
            </Ocontainer>

            <Oitems>
              <ScrollAnimation animateIn="bounceInLeft" duration={2} delay={0}>
                <Ccontainer>
                  <Menu />
                  <Clabels> Browse through our menu </Clabels>
                </Ccontainer>
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceInRight" duration={2} delay={0}>
                <Ccontainer>
                  <Basket />
                  <Clabels> Fill your Tray </Clabels>
                </Ccontainer>
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceInLeft" duration={2} delay={0}>
                <Ccontainer>
                  <Fooddrop />
                  <Clabels> Pickup or Delivery</Clabels>
                </Ccontainer>
              </ScrollAnimation>
            </Oitems>
          </Citems>
        </Content>

        <ViewMenu>
          <MenuT> Go through our various delicacies and be wowed!!! </MenuT>
          <a href="/menu">
            <MenuButton> Browse Menu </MenuButton>
          </a>
        </ViewMenu>
      </Container>
    </Fragment>
  );
};

export default Homepage;

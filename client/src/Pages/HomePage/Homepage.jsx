import React, { Fragment } from 'react';

import {
  Container,
  Header,
  SearchContainer,
  Main,
  TitleContainer,
  Title,
  SubTitle,
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
  Rest,
  ViewMenu,
  MenuT,
  MenuButton,
  Dash,
} from './Homepage.styles';

import Search from '../../components/Search/Search';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';

const Homepage = () => {
  return (
    <Fragment>
      <Container>
        <Header>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <Main>
            <TitleContainer>
              <Title> Order your meals from the Best Restaurants</Title>
              <SubTitle> Everywhere in Lagos</SubTitle>
            </TitleContainer>

            <SubContent>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Rest />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CountUp start={0} end={30} />
                  <p style={{ marginLeft: '5px' }}>Restaurants</p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Dash />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CountUp style={{ marginLeft: '50px' }} start={0} end={30} />{' '}
                  <p style={{ marginLeft: '5px' }}> Registered Users</p>
                </div>
              </div>
            </SubContent>
          </Main>
        </Header>

        <Content>
          <Cheader> What we offer ?</Cheader>
          <Ctext>
            At Foodtime, we make it easier for you to order various meals and
            drinks from various eateries all over Lagos, Nigeria. we enable
            catering outfits and eateries all over Lagos to put their meals and
            drinks online.
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

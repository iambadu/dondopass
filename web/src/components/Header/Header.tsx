import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  Burger,
  Container,
  ContainerProps,
  Group,
  Menu,
  Title,
  Text,
  useMantineTheme,
  MenuProps,
  MenuDropdownProps,
} from '@mantine/core';

import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../utils/constants';
import TopNav from './TopNav';
import { OnMobile, OnMobileEnum } from '../../utils/components.utils';

/**
 *
 * html {
    font-size: calc(15px + 0.390625vw);
}
 */

const TopHeader = () => {
  const { colors } = useMantineTheme();
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const StyledContainer = styled((props: ContainerProps) => <Container {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${HEADER_HEIGHT}px;
  `;
  const HeaderWrap = styled.div`
    background-color: ${colors.dark[6]};
    width: 100%;
  `;
  const MenuDropDown = styled((props: MenuDropdownProps) => <Menu.Dropdown {...props} />)`
    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      display: none;
    }
    height: calc(100vh - ${HEADER_HEIGHT}px);
    background-color: ${colors.dark[6]};
    border-radius: 0;
    border: 0;
    width: 100%;
    transition: transform;
    animation: slide-in-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  `;
  const leftLinks = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Concerts', link: '/concerts' },
  ];
  const rightLinks = [
    { text: 'Login', link: '/login' },
    { text: 'Signup', link: '/signup' },
  ];
  return (
    <HeaderWrap>
      <StyledContainer size={CONTAINER_WIDTH}>
        <Group>
          <Title italic color="yellow.4" order={3}>
            dondopass
          </Title>
          <OnMobile status={OnMobileEnum.HIDE}>
            <TopNav links={leftLinks} />
          </OnMobile>
        </Group>
        <Group>
          <OnMobile status={OnMobileEnum.HIDE}>
            <TopNav links={rightLinks} />
          </OnMobile>
          <OnMobile status={OnMobileEnum.ONLY_MOBILE}>
            <Menu width="100%" offset={13} withinPortal position="bottom-end" opened={menuOpened}>
              <Menu.Target>
                <Burger
                  size="md"
                  onClick={() => setMenuOpened(!menuOpened)}
                  color="white"
                  opened={menuOpened}
                />
              </Menu.Target>
              <MenuDropDown>
                <Menu.Label>Application</Menu.Label>
              </MenuDropDown>
            </Menu>
          </OnMobile>
        </Group>
      </StyledContainer>
    </HeaderWrap>
  );
};

export default TopHeader;

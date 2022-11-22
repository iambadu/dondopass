import React from 'react';
import styled from '@emotion/styled';
import { Container, Text, ContainerProps, Group, Title, useMantineTheme } from '@mantine/core';

import { CONTAINER_WIDTH, HEADER_HEIGHT } from '../../utils/constants';
import TopNav from './TopNav';

const TopHeader = () => {
  const { colors } = useMantineTheme();
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
          <TopNav links={leftLinks} />
        </Group>
        <Group>
          <TopNav links={rightLinks} />
        </Group>
      </StyledContainer>
    </HeaderWrap>
  );
};

export default TopHeader;

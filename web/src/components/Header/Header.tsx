import React from 'react';
import styled from '@emotion/styled';
import { Container, Text, ContainerProps, Group, Title } from '@mantine/core';

import { CONTAINER_WIDTH } from '../../utils/constants';

const TopHeader = () => {
  const StyledContainer = styled((props: ContainerProps) => <Container {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  return (
    <StyledContainer size={CONTAINER_WIDTH}>
      <Group>
        <Title order={1}>Logo</Title>
        <Text sx={{ fontWeight: 500 }}>Menu Items</Text>
      </Group>
      <Group>
        <Text>Login Items</Text>
      </Group>
    </StyledContainer>
  );
};

export default TopHeader;

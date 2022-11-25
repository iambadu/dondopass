import React from 'react';
import { BackgroundImage, Box, Container, Title, Text, useMantineTheme } from '@mantine/core';
import { CONTAINER_WIDTH } from '../../utils/constants';
import img from '../../assets/img/concert.webp';

function Hero() {
  const {
    fn: { rgba },
    colors,
  } = useMantineTheme();
  return (
    <BackgroundImage style={{ minHeight: '60vh' }} src={img}>
      <Box sx={{ height: '60vh', backgroundColor: rgba(colors.dark[9], 0.45) }}>
        <Container size={CONTAINER_WIDTH}>
          <Title color="white">See it happen in real time</Title>
          <Text color="white">
            Buy all your event tickets and also discover new concerts and events happening near you.
          </Text>
        </Container>
      </Box>
    </BackgroundImage>
  );
}

export default Hero;

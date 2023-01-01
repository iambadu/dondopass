import {ScrollView} from 'react-native';
import React from 'react';
import {Screen} from './components/ScreenComponents';
import CardScroll from '../components/app-elements/Card';
import EventList from '../components/app-elements/EventList';

const Home = ({}) => {
  const featuredData = [
    {
      text: 'Musama DIsco Concert',
      imgUri: require('../assets/img/blacko.jpeg'),
    },
    {
      text: 'Manifestivities',
      imgUri: require('../assets/img/mdot.jpeg'),
    },
    {
      text: 'Gyakie Live',
      imgUri: require('../assets/img/gyakie.jpeg'),
    },
  ];
  return (
    <Screen home>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CardScroll data={featuredData} title={'Featured Events'} />
        <EventList />
      </ScrollView>
    </Screen>
  );
};

export default Home;

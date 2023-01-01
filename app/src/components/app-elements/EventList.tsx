import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {BORDER_RADIUS, getSize} from '../constants';
import COLORS from './colors';
import {Title, AppText} from './text.components';
import {AppIcon, MaterialIcon} from './AppIcon';

export default function EventList() {
  const EventCard = () => {
    return (
      <TouchableOpacity activeOpacity={0.4} style={eventCardStyles.container}>
        <View style={eventCardStyles.label}>
          <Text style={eventCardStyles.label_text}>Concert</Text>
        </View>
        <Image
          style={eventCardStyles.image}
          source={require('../../assets/img/blacko.jpeg')}
          resizeMode="contain"
        />
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={eventCardStyles.title}>
            Musama Disco Concert
          </Text>
          <View style={eventCardStyles.caption_wrap}>
            <MaterialIcon
              color={COLORS.gray[700]}
              style={eventCardStyles.caption_icon}
              name="location-on"
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={eventCardStyles.caption}>
              National Theatre, Accra
            </Text>
          </View>
          <View style={eventCardStyles.caption_wrap}>
            <AppIcon
              color={COLORS.gray[700]}
              style={eventCardStyles.caption_icon}
              name="calendar-month"
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={eventCardStyles.caption}>
              25TH DEc, 2022
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Title>Events This Week</Title>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </View>
  );
}

const eventCardStyles = StyleSheet.create({
  label: {
    position: 'absolute',
    bottom: getSize(1),
    right: getSize(1),
    borderRadius: 2,
    backgroundColor: COLORS.green[600],
  },
  label_text: {
    paddingVertical: getSize(1),
    paddingHorizontal: getSize(2),
    fontSize: getSize(3),
    fontWeight: '500',
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  caption_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: getSize(1),
  },
  caption_icon: {
    fontSize: getSize(3.1),
    paddingRight: getSize(1),
  },
  caption: {
    fontSize: getSize(3.1),
    textTransform: 'uppercase',
    color: COLORS.gray[700],
    fontWeight: '600',
  },
  title: {
    fontSize: getSize(4.5),
    fontWeight: '600',
  },
  image: {
    height: getSize(18),
    width: getSize(18),
    borderRadius: getSize(1),
    marginRight: getSize(2),
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS.CARD,
    padding: getSize(2),
    backgroundColor: COLORS.slate[50],
    marginBottom: getSize(2),
    borderWidth: 1,
    borderColor: COLORS.slate[100],
  },
});

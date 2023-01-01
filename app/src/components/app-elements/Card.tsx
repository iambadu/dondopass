import {
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from './colors';
import {AppText, Title} from './text.components';
import {SCROLL_CARD_WIDTH} from '../constants';

type CardScrollProps = {
  data: CardProps[];
  title: string;
  rounded?: boolean;
};
type CardProps = {
  text: string;
  imgUri: any;
};
const CardScroll = (props: CardScrollProps) => {
  const {data, title, rounded} = props;
  return (
    <View>
      <Title size={5} bold>
        {title}
      </Title>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scroll_container}
        horizontal>
        {(data || []).map((item, index) => (
          <ScrollCardItem
            rounded={rounded || false}
            key={`card-${index}`}
            {...item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const ScrollCardItem = (props: CardProps & {rounded: boolean}) => {
  const {rounded, text, imgUri} = props;
  const {card_container, card_image, text_center, card_round, card_text} =
    styles;
  return (
    <TouchableOpacity style={card_container} activeOpacity={0.8}>
      <Image
        source={imgUri}
        resizeMode="cover"
        style={[card_image, rounded && card_round]}
      />
      <AppText
        style={[card_text, rounded && text_center]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scroll_container: {
    paddingBottom: 10,
  },
  card_container: {
    width: SCROLL_CARD_WIDTH,
    marginRight: 16,
  },
  card_text: {
    fontWeight: '500',
  },
  text_center: {
    textAlign: 'center',
  },
  card_round: {
    borderRadius: SCROLL_CARD_WIDTH / 2,
  },
  card_image: {
    width: SCROLL_CARD_WIDTH,
    height: SCROLL_CARD_WIDTH,
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
  },
});

export default CardScroll;

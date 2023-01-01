import {Appearance} from 'react-native';
import COLORS from './app-elements/colors';
export const PADDING = {
  PAGE: 15,
};
export const SCROLL_CARD_WIDTH = 150;
export const getSize = (size: number) => size * 4;
export const BORDER_RADIUS = {
  CARD: 8,
};
const colorScheme = Appearance.getColorScheme();
export const appColor =
  colorScheme === 'dark' ? COLORS.white : COLORS.gray[900];

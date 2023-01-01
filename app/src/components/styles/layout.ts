import {StyleSheet, Appearance} from 'react-native';
import {PADDING} from '../constants';
import COLORS from '../app-elements/colors';
// Padding
const isDark = Appearance.getColorScheme() === 'dark';
export const LAYOUT = StyleSheet.create({
  PAGEWRAP: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
  },
});

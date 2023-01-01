import {StyleSheet, Text, TextProps, useColorScheme} from 'react-native';
import React from 'react';
import COLORS from './colors';
import {getSize} from '../constants';
type TypeProps = {
  bold?: boolean;
  size?: number;
  children: React.ReactNode;
};

export const AppText = (props: TextProps & TypeProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? COLORS.white : COLORS.gray[900];
  const {children, style, bold, size, ...otherProps} = props;
  return (
    <Text
      {...otherProps}
      style={[
        styles({bold, color, size}).text,
        style,
        bold && styles({bold, color, size}).header,
      ]}>
      {children}
    </Text>
  );
};

const styles = (props: Pick<TypeProps, 'bold' | 'size'> & {color: string}) => {
  return StyleSheet.create({
    header: {
      fontWeight: 'bold',
    },
    text: {
      color: props.color,
      fontSize: props.size! * 4 || 14,
    },
  });
};

export const Title = (props: TextProps & TypeProps) => (
  <AppText style={{paddingVertical: getSize(4)}} size={5} {...props} bold />
);

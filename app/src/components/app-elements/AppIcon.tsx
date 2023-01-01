import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';

export const AppIcon = (props: IconProps) => {
  return <Icon {...props} />;
};
export const MaterialIcon = (props: IconProps) => {
  return <MatIcon {...props} />;
};

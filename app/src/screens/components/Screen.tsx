import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Screen: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Screen;

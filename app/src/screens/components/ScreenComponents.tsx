import React from 'react';
import AppHeader from '../../components/app-elements/AppHeader';
import {LAYOUT} from '../../components/styles/layout';
import {AppHeaderProps} from '../../components/app-elements/AppHeader';
import {View, SafeAreaView, useColorScheme} from 'react-native';
import COLORS from '../../components/app-elements/colors';

export const Screen: React.ComponentType<
  AppHeaderProps & {children: React.ReactNode}
> = props => {
  const {children, ...rest} = props;
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? COLORS.gray[900] : COLORS.white;
  return (
    <SafeAreaView style={[LAYOUT.PAGEWRAP, {backgroundColor: color}]}>
      <View style={{paddingHorizontal: 15}}>
        <AppHeader {...rest} />
        {children}
      </View>
    </SafeAreaView>
  );
};

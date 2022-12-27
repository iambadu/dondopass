import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import COLORS from './colors';
import {useNavigation} from '@react-navigation/native';
import AppIcon from './AppIcon';

type AppHeaderProps = {
  home?: boolean;
  rightComponent?: ReactNode;
};
const AppHeader: React.FC<AppHeaderProps> = ({home, rightComponent}) => {
  type NavWithIconProps = {
    screenName?: string;
    iconName?: string;
  };
  const navigate = useNavigation();
  const NavWithIcon: React.FC<NavWithIconProps> = ({screenName, iconName}) => {
    const navigateToScreen = () =>
      screenName
        ? navigate.navigate({name: screenName} as never)
        : navigate.goBack();

    return (
      <TouchableOpacity onPress={navigateToScreen} activeOpacity={0.4}>
        <AppIcon size={30} name={iconName ? iconName : 'keyboard-backspace'} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {!home && <NavWithIcon />}
      <Text style={styles.tempIcon}>dondopass</Text>
      {rightComponent ? (
        rightComponent
      ) : (
        <NavWithIcon screenName="Profile" iconName="account-circle" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tempIcon: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
    color: COLORS.rose[600],
  },
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderColor: COLORS.gray[300],
  },
});
export default AppHeader;

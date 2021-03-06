import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Block, NavBar, theme } from 'galio-framework';

import Icon from 'react-native-vector-icons/FontAwesome';

import argonTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const Header = ({ back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props }) => {

  const handlePress = () => {
    return (back ? navigation.goBack() : navigation.openDrawer());
  }

  // const { back, title, white, transparent, bgColor, iconColor, titleColor, navigation, ...props } = this.props;
  const { routeName } = navigation.state;
  const noShadow = ['Company'].includes(routeName);
  const headerStyles = [
    !noShadow ? styles.shadow : null,
    transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
  ];

  const navbarStyles = [
    styles.navbar,
    bgColor && { backgroundColor: bgColor }
  ];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={false}
        title={title}
        style={navbarStyles}
        transparent={transparent}
        rightStyle={{ alignItems: 'center' }}
        left={
          <Icon name={back ? "chevron-left" : "navicon"} size={15}
            onPress={handlePress}
            color={iconColor || '#0B5713'} />
        }
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: argonTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
          titleColor && { color: titleColor }
        ]}
        {...props}
      />
    </Block>
  );

}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: '0.8%',
    color: '#525F7F',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
});

export default withNavigation(Header);

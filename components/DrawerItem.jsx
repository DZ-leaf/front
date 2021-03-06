import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerItem = ({ focused, title }) => {

  const renderIcon = () => {

    switch (title) {
      case "홈":
        return (<Icon name="home" size={20} color={focused ? "#ffffff" : "#000000"} />);
      case "회사":
        return (<Icon name="desktop-mac" size={20} color={focused ? "#ffffff" : "#000000"} />);
      case "그룹":
        return (<Icon name="account-multiple" size={20} color={focused ? "#ffffff" : "#000000"} />);
      case "일정":
        return (<Icon name="calendar-text" size={20} color={focused ? "#ffffff" : "#000000"} />);
      case "로그아웃":
        return (<Icon name="logout-variant" size={20} color={focused ? "#ffffff" : "#000000"} />);
      default:
        return null;
    }
  };


  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null
  ];

  return (
    <Block flex row style={containerStyles}>
      <Block middle flex={0.2}>
        {renderIcon()}
      </Block>
      <Block row center flex={0.5}>
        <Text
          size={15}
          bold={focused ? true : false}
          color={focused ? "#ffffff" : "#000000"}>
          {title}
        </Text>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 14,
    paddingHorizontal: 13
  },
  activeStyle: {
    backgroundColor: '#0B5713',
    borderRadius: 4
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;

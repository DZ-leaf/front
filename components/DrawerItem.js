import React from "react";
import { StyleSheet, View } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "홈":
        return (<Icon name="home" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      case "프로필":
        return (<Icon name="account" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      case "회사":
        return (<Icon name="desktop-mac" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      case "동아리":
        return (<Icon name="arrange-bring-forward" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      case "그룹":
        return (<Icon name="comment-account" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      case "일정":
        return (<Icon name="calendar-text" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      case "로그아웃":
        return (<Icon name="logout-variant" size={20} color={focused ? "white" : argonTheme.COLORS.BLACK}/>);
      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block flex row style={containerStyles}>
        <Block middle flex={0.2}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.5}>
          <Text
            size={15}
            bold={focused ? true : false}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}>
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 14,
    paddingHorizontal: 13
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;

import React from 'react';
import { StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { Block,  theme  } from 'galio-framework';
// import {theme} from '../constants/Theme';

const { width } = Dimensions.get('screen');
import argonTheme from '../constants/Theme';

const defaultMenu = [
  { id: 'findId', title: '아이디 찾기', },
  { id: 'findPW', title: '비밀번호 찾기', },
  // { id: 'popular', title: 'Popular', },
  // { id: 'beauty', title: 'Beauty', },
  // { id: 'cars', title: 'Cars', },
  // { id: 'motocycles', title: 'Motocycles', },
];

export default class Tabs extends React.Component {
  static defaultProps = {
    data: defaultMenu,
    initialIndex: null,
  }

  state = {
    active: 'findId',
  }

  componentDidMount() {
    const { initialIndex } = this.props;
    initialIndex && this.selectMenu(initialIndex);
  }

  animatedValue = new Animated.Value(1);

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300,
      // useNativeDriver: true, // color not supported
    }).start()
  }

  menuRef = React.createRef();

  onScrollToIndexFailed = () => {
    this.menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5
    });
  }

  selectMenu = (id) => {
    this.setState({ active: id });

    this.menuRef.current.scrollToIndex({
      index: this.props.data.findIndex(item => item.id === id),
      viewPosition: 0.5
    });

    this.animate();
    this.props.onChange && this.props.onChange(id);
  }

  renderItem = (item) => {
    const isActive = this.state.active === item.id;  

    const textColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [argonTheme.COLORS.BLACK, isActive ? argonTheme.COLORS.WHITE : argonTheme.COLORS.BLACK],
      extrapolate: 'clamp',
    });
    
    const containerStyles = [
      styles.titleContainer,
      !isActive && { backgroundColor: '#F0F2F0' },
      isActive && styles.containerShadow
    ];

    return (
      <Block style={containerStyles}>
        <Animated.Text
          style={[
            styles.menuTitle,
            { color: textColor }
          ]}
          onPress={() => this.selectMenu(item.id)}>
          {item.title}
        </Animated.Text>
      </Block>
    )
  }

  renderMenu = () => {
    const { data, ...props } = this.props;

    return (
      <FlatList
        {...props}
        data={data}
        horizontal={true}
        ref={this.menuRef}
        extraData={this.state}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={this.onScrollToIndexFailed}
        renderItem={({ item }) => this.renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    )
  }

  render() {
    return (
      <Block style={styles.container}>
        {this.renderMenu()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: theme.COLORS.WHITE,
    zIndex: 2,
    backgroundColor: '#F0F2F0',
    marginBottom: -15,
  },
  // shadow: {
  //   shadowColor: theme.COLORS.BLACK,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 8,
  //   shadowOpacity: 0.2,
  //   elevation: 4,
  // },
  menu: {
    // paddingHorizontal: theme.SIZES.BASE * 4,
    paddingLeft: 51,
    paddingTop: 8,
    paddingBottom: 0,
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: argonTheme.COLORS.ACTIVE,
    paddingHorizontal: theme.SIZES.BASE * 0.5,
    // borderRadius: 2,
    // marginRight: 1,
    // borderWidth: 1,
    // borderBottomColor: '#25A731',
    borderColor: '#25A731',
    // borderBottomWidth: 2
  },
  // containerShadow: {
  //   shadowColor: 'black',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 4,
  //   shadowOpacity: 0.1,
  //   elevation: 1,
  // },
  menuTitle: {
    fontWeight: '500',
    fontSize: 18,
    // lineHeight: 28,
    paddingVertical: 15,  //10
    paddingHorizontal: 30,  //18
    paddingBottom: 25,
    color: argonTheme.COLORS.MUTED
  },
});

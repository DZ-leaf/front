import React from 'react';
import { StyleSheet, Dimensions, FlatList, Animated, Text } from 'react-native';
import { Block, theme } from 'galio-framework';
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get('screen');
import argonTheme from '../constants/Theme';
import FindIdScreen from '../screens/FindIdScreen';
import FindPwScreen from '../screens/FindPwScreen';
import IdConfirmScreen from '../screens/IdConfirmScreen';
import PwResetScreen from '../screens/PwResetScreen'

const defaultMenu = [
  { id: 'Id', title: '아이디 찾기', },
  { id: 'PW', title: '비밀번호 찾기', },
];

/* export default */ class Tabs extends React.Component {
  static defaultProps = {
    data: defaultMenu,
    initialIndex: null,
  }

  state = {
    active: 'Id',
    // order: this.props.order,
    // order: 1,
    refreshing: false,
  }

  componentDidMount() {
    const { initialIndex } = this.props;
    initialIndex && this.selectMenu(initialIndex);
  }

  Reset = () => {
    this.setState({
      active: 'Id',
    });
  }

  animatedValue = new Animated.Value(1);

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300,
    }).start()
  }

  menuRef = React.createRef();

  onScrollToIndexFailed = () => {
    this.menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5,
    });
  }

  selectMenu = (id, ) => {
    this.setState({ active: id, });

    this.menuRef.current.scrollToIndex({
      index: this.props.data.findIndex(item => item.id === id),
      viewPosition: 0.5,
    });

    this.animate();
    this.props.onChange && this.props.onChange(id);

    this.props.navigation.navigate('Find', { order: 1 })
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
          onPress={() => this.selectMenu(item.id)}
        >
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


  selectScreen = () => {
    if (this.state.active == 'Id') {
      if (this.props.order == 1) return <FindIdScreen /*  onClickListener={this.props.onClickListener } */ />
      else return <IdConfirmScreen onClickListener={this.Reset} />
    }
    else {
      if (this.props.order == 1) return <FindPwScreen /*  onClickListener={this.props.onClickListener} */ />
      else return <PwResetScreen onClickListener={this.Reset} />
    }
  }

  render() {
    return (
      <Block style={styles.container}>
        <Block style={[styles.textView /*, styles.tab */]}>
          <Block style={styles.menuContainer}>
            {this.renderMenu()}
          </Block>
        </Block>
        {this.selectScreen()}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F0',
    paddingTop: 50,
    alignItems: 'center',
  },
  menuContainer: {
    borderBottomColor: '#25A731',
    borderBottomWidth: 5,
    width: width - theme.SIZES.BASE * 6,
    backgroundColor: '#F0F2F0',
    alignItems: 'center',
  },
  menu: {
    paddingTop: 8,
    paddingBottom: 0,
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: argonTheme.COLORS.ACTIVE,
    width: (width - theme.SIZES.BASE * 6) / 2,
    borderColor: '#25A731',
    borderWidth: 1
  },
  menuTitle: {
    fontWeight: '500',
    fontSize: 18,
    paddingTop: 15,  //10
    paddingBottom: 25,
    // paddingHorizontal: 15,  //18
    color: argonTheme.COLORS.MUTED
  },
  textView: {
    alignItems: 'flex-start',
    paddingTop: '3%',
  },
});

export default withNavigation(Tabs)
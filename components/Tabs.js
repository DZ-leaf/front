import React from 'react';
import { StyleSheet, Dimensions, FlatList, Animated, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');
import argonTheme from '../constants/Theme';
import FindIdScreen from '../screens/FindIdScreen';
import FindPwScreen from '../screens/FindPwScreen';
import IdConfirmScreen from '../screens/IdConfirmScreen';
import PwResetScreen from '../screens/PwResetScreen'
import { LOADIPHLPAPI } from 'dns';

const defaultMenu = [
  { id: 'Id', title: '아이디 찾기', },
  { id: 'PW', title: '비밀번호 찾기', },
];



export default class Tabs extends React.Component {
    static defaultProps = {
    data: defaultMenu,
    initialIndex: null,
  }

  state = {
    active: 'Id',
    // order: this.props.order,
    // order: 1,
  }

  componentDidMount() {
    const { initialIndex } = this.props;
    initialIndex && this.selectMenu(initialIndex);
    console.log("CDM@@@");
  }

  onClickListener() {
    this.setState({
      ...this.state,
      order: this.props.order,
    })
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

<<<<<<< HEAD
  selectMenu = (id) => {
    this.setState({ active: id });
=======
  order = this.props.order;

  selectMenu = (id) => {    
    console.log("selectMenu!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    
    this.setState({ active: id});
    // this.props.order=1;
      

>>>>>>> 3d257508092abacc82b3e415b05449ed83abe5f6
    this.menuRef.current.scrollToIndex({
      index: this.props.data.findIndex(item => item.id === id),
      viewPosition: 0.5,
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


  selectScreen = () => {
    if (this.state.active == 'Id') {
<<<<<<< HEAD
      if (this.state.order == 1) return <FindIdScreen />
      else return <IdConfirmScreen id="1"/>
=======
      if (this.props.order == 1) return <FindIdScreen  onClickListener={this.props.onClickListener } />
      else return <IdConfirmScreen />
>>>>>>> 3d257508092abacc82b3e415b05449ed83abe5f6
    }
    else {
      if (this.props.order == 1) return <FindPwScreen  onClickListener={this.props.onClickListener}  />
      else return <PwResetScreen />
    }
  }

  render() {
<<<<<<< HEAD
=======
    console.log('$$$$$$$$$$$$$$' + this.props.order);
    
    console.log("TABrenders");
    console.log(this.state.active, this.state.order);
>>>>>>> 3d257508092abacc82b3e415b05449ed83abe5f6
    return (
      <Block style={styles.container}>
        <Block style={[styles.textView, styles.tab]}>
          <Block style={styles.menuContainer}>
            {this.renderMenu()}
          </Block>
        </Block>
<<<<<<< HEAD
=======
        {/* {this.state.active == 'Id'? <FindIdScreen/>:<FindPwScreen/>} */}
>>>>>>> 3d257508092abacc82b3e415b05449ed83abe5f6
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
  },
  menuContainer: {
    width: width,
    backgroundColor: theme.COLORS.WHITE,
    zIndex: 2,
    backgroundColor: '#F0F2F0',
    marginBottom: -15,
  },
  menu: {
    paddingLeft: 51,
    paddingTop: 8,
    paddingBottom: 0,
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: argonTheme.COLORS.ACTIVE,
    paddingHorizontal: theme.SIZES.BASE * 0.5,
    borderColor: '#25A731',
  },
  menuTitle: {
    fontWeight: '500',
    fontSize: 18,
    paddingVertical: 15,  //10
    paddingHorizontal: 30,  //18
    paddingBottom: 25,
    color: argonTheme.COLORS.MUTED
  },
  textView: {
    paddingHorizontal: theme.SIZES.BASE * 3.5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '3%',
  },
  tab: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50,
    borderColor: '#F0F2F0',
    borderBottomColor: '#25A731',
    borderWidth: 8,
  },
});

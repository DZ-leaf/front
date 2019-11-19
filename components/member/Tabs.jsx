import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { Block, theme } from 'galio-framework';
import { withNavigation } from 'react-navigation'

const { width } = Dimensions.get('screen');

import FindIdScreen from '../../screens/member/find/FindIdScreen.jsx';
import FindPwScreen from '../../screens/member/find/FindPwScreen.jsx';
import IdConfirmScreen from '../../screens/member/find/IdConfirmScreen.jsx';
import PwResetScreen from '../../screens/member/find/PwResetScreen.jsx';

// const defaultMenu = [
//   { id: 'Id', title: '아이디 찾기', },
//   { id: 'PW', title: '비밀번호 찾기', },
// ];

const Tabs = (props) => {

  //   static defaultProps = {
  //   data: defaultMenu,
  //   initialIndex: null,
  // }

  const data = [
    { id: 'Id', title: '아이디 찾기', },
    { id: 'PW', title: '비밀번호 찾기', },
  ]

  let initialIndex = null;

  const [active, setActive] = useState('Id')
  const [refreshing, setRefreshing] = useState(false);

  const extra = {
    "active": active,
    "refreshing": refreshing,
  }

  useEffect(() => {
    initialIndex && this.selectMenu(initialIndex);
  }, [])

  // componentDidMount() {
  //   const { initialIndex } = this.props;
  //   initialIndex && this.selectMenu(initialIndex);
  // }

  const Reset = () => { setActive('Id') }


  let animatedValue = new Animated.Value(1);

  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
    }).start()
  }

  let menuRef = React.createRef();

  const onScrollToIndexFailed = () => {
    menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5,
    });
  }

  const selectMenu = (id, ) => {
    setActive(id)

    menuRef.current.scrollToIndex({
      index: data.findIndex(item => item.id === id),
      viewPosition: 0.5,
    });

    animate();
    props.onChange && props.onChange(id);
    props.navigation.navigate('Find', { order: 1 })
  }

  const renderItem = (item) => {
    const isActive = active === item.id;
    const textColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000000', isActive ? '#ffffff' : '#000000'],
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
          style={[styles.menuTitle, { color: textColor }]}
          onPress={() => selectMenu(item.id)}>
          {item.title}
        </Animated.Text>
      </Block>
    )
  }


  const renderMenu = () => {
    return (
      <FlatList
        {...props}
        data={data}
        horizontal={true}
        ref={menuRef}
        extraData={extra}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={onScrollToIndexFailed}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    )
  }


  const selectScreen = () => {
    if (active == 'Id') {
      if (props.order == 1)
        return <FindIdScreen />
      else
        return <IdConfirmScreen onClickListener={Reset} />
    }
    else {
      if (props.order == 1)
        return <FindPwScreen />
      else
        return <PwResetScreen onClickListener={Reset} />
    }
  }

  return (
    <Block style={styles.container}>
      <Block style={[styles.textView]}>
        <Block style={styles.menuContainer}>
          {renderMenu()}
        </Block>
      </Block>
      {selectScreen()}
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F0',
    paddingTop: 50,
    alignItems: 'center',
  },
  menuContainer: {
    borderBottomColor: '#0B5713',
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
    backgroundColor: '#0B5713',
    width: (width - theme.SIZES.BASE * 6) / 2,
    borderColor: '#0B5713',
    borderWidth: 1
  },
  menuTitle: {
    fontWeight: '500',
    fontSize: 18,
    paddingTop: 15,  //10
    paddingBottom: 25,
    color: '#ADB5BD'
  },
  textView: {
    alignItems: 'flex-start',
    paddingTop: '3%',
  },
});

export default withNavigation(Tabs)
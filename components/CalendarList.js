import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Body, Right } from 'native-base'

import EventDetail from '../screens/calendar/EventDetailModal';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

// function Item({ title }) {
//   return (
//     <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail')}}>
//       <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }



class CalendarList extends Component {

  // _showNotice(){
  //   this.props.navigator.showModal({
  //     screen: 'EventDetail', // unique ID registered with Navigation.registerScreen
  //     title: "Notice", // title of the screen as appears in the nav bar (optional)
  //     passProps: {}, // simple serializable object that will pass as props to the modal (optional)
  //     navigatorStyle: {
  //       //navBarHidden: true,
  //     }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  //     animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
  //   });
  // }
  render() {
    function Item({ title, navigation }) {
      return (
        <TouchableOpacity onPress={() => { navigation.navigate('Detail') }}>
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      // <View>
      //   <FlatList
      //     data={DATA}
      //     renderItem={({ item }) => <Item title={item.title} navigation={this.props.navigation}/>}
      //     keyExtractor={item => item.id}
      //   />
      // </View>

      <Container style={styles.container}>
        <Content>
          <List>
            <ListItem onPress={() => { this.props.navigation.navigate('Detail')}}>
              <Text style={styles.text}>내 일정1</Text>
            </ListItem>
            <ListItem onPress={() => { this.props.navigation.navigate('Detail')}}>
              <Text style={styles.text}>내 일정2</Text>
            </ListItem>
            <ListItem onPress={() => { this.props.navigation.navigate('Detail')}}>
              <Text style={styles.text}>내 일정3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f0f2',
  },
  text: {
    marginVertical: 8,
    marginHorizontal: 10,
    fontSize: 15,
  },

});

export default CalendarList;


import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { Container, Content, List, ListItem } from 'native-base'

// import EventDetail from '../../screens/calendar/EventDetailModal';

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


const CalendarList = ({ title, navigation }) => {

  return (

    <Container style={styles.container}>
      <Content>
        <List>
          <ListItem onPress={() => { navigation.navigate('Detail') }}>
            <Text style={styles.text}>내 일정1</Text>
          </ListItem>
          <ListItem onPress={() => { navigation.navigate('Detail') }}>
            <Text style={styles.text}>내 일정2</Text>
          </ListItem>
          <ListItem onPress={() => { navigation.navigate('Detail') }}>
            <Text style={styles.text}>내 일정3</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
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


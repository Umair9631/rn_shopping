import React , {useState} from 'react';
import {  Alert, View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './src/screens/Header';
import { uuid } from 'uuidv4';
import ListItems from './src/screens/ListItems';
import AddItem from './src/screens/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Butter'},
    {id: uuid(), text: 'Jam'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id); 
    });
  };

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Could not able to create empty item', [{text: 'Ok'}]);

    } else {
      setItems(prevItems => {
        return [{id: uuid(), text: text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container} >
      <Header title= 'Shopping List' />
      <AddItem addItem = {addItem}/>
      <FlatList data={items} renderItem={ ({item}) => <ListItems item={item} deleteItem = {deleteItem}/> } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text_style: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});

export default App;
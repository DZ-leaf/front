import React from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableHighlight } from 'react-native';

const { width } = Dimensions.get('window')

const ImageTile = ({ item, index, selected, selectImage, camera }) => {

  if (!item)
    return null;

  return (
    <TouchableHighlight style={[camera ? styles.imageSlider : '', { opacity: selected ? 0.8 : 1 }]}
      underlayColor='transparent' onPress={() => selectImage(index)}>

      {camera ? <View style={{ position: 'relative' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Image source={{ uri: item }} style={{ width: width / 6, height: width / 6, marginRight: 3 }} />
          {selected &&
            <Image style={{ position: 'absolute', left: 'auto', top: 'auto', marginLeft: 'auto' }}
              source={require('./Assets/tick-2.png')}
            />}
        </View>
      </View> : <View style={{ position: 'relative' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{ width: width / 4, height: width / 4 }} source={{ uri: item }} />
            {selected &&
              <Image style={{ position: 'absolute', left: 'auto', top: 'auto', marginLeft: 'auto' }}
                source={require('./Assets/tick-2.png')}
              />}
          </View>
        </View>}


    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  imageSlider: {
    alignSelf: 'flex-end',
    overflow: 'scroll'
  },
})

export default ImageTile;

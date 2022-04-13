import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Dimensions,
  Alert,
  Modal,
  TouchableOpacity,
  Text,
  Image,
  Pressable,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Styles from '../Styles';
const { height, width } = Dimensions.get('window');
export const MyImg = () => {
  const [text, setText] = useState(require('../../assets/image.png'));
  const [image, setImage] = useState('');
  console.log(image);
  const onSelectImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    });
  };
  const onSelectCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.container}>
        <Text style={{ fontSize: 22, color: 'black' }}>Image picker</Text>

        <Pressable
          onPress={() => {
            Alert.alert('Alert....', 'Select One Option', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
              },
              {
                text: 'Camera',
                onPress: () => onSelectCamera(),
              },
              { text: 'Gallery', onPress: () => onSelectImage() },
            ]);
          }}>
          <Image
            source={image === ('') ? text : { uri: image }}
            resizeMode={'contain'}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

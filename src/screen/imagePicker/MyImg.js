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
  Platform,
} from 'react-native';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';
import ImagePicker from 'react-native-image-crop-picker';
import Styles from '../Styles';
const { height, width } = Dimensions.get('window');
export const MyImg = () => {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
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
      <View style={{
        height: (height / 100) * 40,
        width: (width / 100) * 100,
      }}>
        {/* <MapView
      provider={PROVIDER_GOOGLE}
          style={{
            height: 200, width: 400,
            //alignItems: 'center',
          }}
          showsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            // userInterfaceStyle: 'dark',
            // showsMyLocationButton: true,
            // scrollEnabled: true,
            // moveOnMarkerPress: true,
            // onMapReady: true,
          }}
          onRegionChangeComplete={(region) => setRegion(region)}
        /> */}
        <Text style={{fontSize: 16, color: 'black',}}>Current latitude: {region.latitude}</Text>
        <Text style={{fontSize:16, color: 'black'}}>Current longitude: {region.longitude}</Text>
      </View>
    </View>
  );
};

import React from "react";
import { View, Text, Dimensions,TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Styles from "./Styles";
const { height, width } = Dimensions.get('window');
export const Dummy2 = (navigation) => {
    return (
        <View style={Styles.mainContainer}>
            <View
                style={{
                    height: (height / 100) * 10,
                    width: width,
                    backgroundColor: 'red',
                    // alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity
               onPress={() => navigation.openDrawer()}
                    style={{
                        height: (height / 100) * 10,
                        width: (width / 100) * 15,
                        backgroundColor: 'blue',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icons name="ios-home" color={'black'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
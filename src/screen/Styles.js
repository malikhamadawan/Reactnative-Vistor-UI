import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const Styles = StyleSheet.create({
        mainContainer: {
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
        },
        container: {
                height: (height / 100) * 40,
                width: width,
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
        },
        container1: {
                // backgroundColor: 'green',
                height: (height / 100) * 25,
                width: (width / 100) * 50,
                borderRadius: 120,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',

        },
        container2: {
                height: height,
                width: width,
                // backgroundColor: 'red',
                justifyContent: 'flex-end',
                alignItems: 'center',
        },
        headerView: {
                height: (height / 100) * 11,
                width: (width / 100) * 100,
                // backgroundColor: 'red',

        },
        headerView1: {
                height: (height / 100) * 11,
                width: (width / 100) * 20,
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
        },
        Button: {
                height: 65,
                width: 200,
                backgroundColor: 'blue',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
        },

});
export default Styles
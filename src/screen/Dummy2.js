import React from "react";
import { View, Text } from 'react-native';
import Styles from "./Styles";
export const Dummy2 = () => {
    return (
        <View style={Styles.mainContainer}>
            <Text
                style={{
                    fontSize: 16,
                    color: 'black',
                }}
            >Dummy2</Text>
        </View>
    );
}
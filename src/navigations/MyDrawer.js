import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyImg } from '../screen/imagePicker/MyImg';
import { Dummy } from '../screen/Dummy';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MyImg" component={MyImg} options={{headerShown: false}} />
            <Drawer.Screen name="Dummy" component={Dummy} />
        </Drawer.Navigator>
    );
};
export default MyDrawer

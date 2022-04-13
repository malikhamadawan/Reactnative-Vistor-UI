import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MyImg } from '../screen/imagePicker/MyImg';
import { Dummy } from '../screen/Dummy';
import { Dummy1 } from '../screen/Dummy1';
import { Dummy2 } from '../screen/Dummy2';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MyImg" component={MyImg} />
            <Drawer.Screen name="Dummy" component={Dummy} />
            <Drawer.Screen name="Dummy1" component={Dummy1} />
            <Drawer.Screen name="Dummy2" component={Dummy2} />
        </Drawer.Navigator>
    );
};
export default MyDrawer

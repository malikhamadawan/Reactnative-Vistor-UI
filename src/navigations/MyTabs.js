import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import { Dummy1 } from '../screen/Dummy1';
import { Dummy2 } from '../screen/Dummy2';
import MyDrawer from './MyDrawer';
import { Dummy } from '../screen/Dummy';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                //tabBarStyle: {backgroundColor: 'red'},
            }}
        >
            <Tab.Screen name="MyDrawer" component={MyDrawer} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Icons name="ios-home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="Dummy" component={Dummy} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Icons name="ios-home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="Dummy1" component={Dummy1} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Icons name="ios-home" color={color} size={22} />
                ),
            }} />
            <Tab.Screen name="Dummy2" component={Dummy2} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Icons name="ios-home" color={color} size={22} />
                ),
            }} />
        </Tab.Navigator>
    );
}
export default MyTabs
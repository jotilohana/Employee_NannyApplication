import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/Screens/HomeScreen';
import Login from '../src/Screens/Login';
import ForgotPass from '../src/Screens/Forgot_Pass';
import Verify from '../src/Screens/Verify_Email';
import ChangePass from '../src/Screens/Change_Pass';
import Service from '../src/Screens/Service';
import TestimonialSection from '../src/Screens/testimonialSection';
import ServiceDetails from '../src/Screens/ServiceDetails';
import DropDown from '../src/Screens/DropDown';
import Details from '../src/Screens/particularScreenDetails';
import Profile from '../src/Screens/Profile';
import EditProfile from '../src/Screens/EditProfile';
import UpdatePass from '../src/Screens/UpdatePass';
import Chat from '../src/Screens/Chat';
import MessagesScreen from '../src/Screens/Messages';
import Attachment from '../src/Screens/Attachment';
import Thankyou from '../src/Screens/thankyou';
import Map from '../src/Screens/Map';
import mainScreenSS from '../src/Screens/mainpage_selectedService';
import Review from '../src/Screens/review';
import HeaderImage from '../src/Screens/HeaderImage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DrawerContent from '../src/components/DrawerContent';

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation, route}) => {
  const tabHiddenRoutes = ['Login', 'Chat', 'ChatScreen', 'Map'];

  if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Login"
        component={Login}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Forgot Password"
        component={ForgotPass}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Verify"
        component={Verify}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Change Password"
        component={ChangePass}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Service"
        component={Service}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="TestimonialSection"
        component={TestimonialSection}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Service Details"
        component={ServiceDetails}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="DropDown"
        component={DropDown}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="MainService"
        component={mainScreenSS}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Details"
        component={Details}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Profile"
        component={Profile}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Edit_Profile"
        component={EditProfile}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Update Password"
        component={UpdatePass}
      />

      <HomeStack.Screen
        options={({route}) => ({
          title: <HeaderImage />,
          tabBarStyle: {display: 'none'},
        })}
        name="ChatScreen"
        component={Chat}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', tabBarStyle: {display: 'none'}}}
        name="Chat"
        component={MessagesScreen}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Attachment"
        component={Attachment}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Thankyou"
        component={Thankyou}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Map"
        component={Map}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Review"
        component={Review}
      />
    </HomeStack.Navigator>
  );
};

const ChatStack = createStackNavigator();
const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Chat" component={MessagesScreen} />
      <ChatStack.Screen
        options={{
          tabBarStyle: {display: 'none'},
          title: <HeaderImage />,
        }}
        name="ChatScreen"
        component={Chat}
      />
      <ChatStack.Screen
        options={{headerShown: 'false'}}
        name="HeaderImage"
        component={HeaderImage}
      />
    </ChatStack.Navigator>
  );
};

const ProfileScreen = createStackNavigator();
const ProfileStack = () => {
  return (
    <ProfileScreen.Navigator>
      <ProfileScreen.Screen name="Profile" component={Profile} />
      <ProfileScreen.Screen
        options={{headerShown: 'false'}}
        name="Edit Profile"
        component={EditProfile}
      />
    </ProfileScreen.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tabs.Navigator
      barStyle={{backgroundColor: '#0047AB'}}
      tabBarOptions={{
        activeTintColor: '#03204c',
        inactiveTintColor: 'grey',
      }}
      screenOptions={{
        tabBarStyle: {height: 40},
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({home, color, size}) => {
            const icon = home ? 'Login' : 'home';
            return <Icon name={icon} color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarStyle: {display: 'none'},
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <Icon name="chatbubbles" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Jobs"
        component={mainScreenSS}
        options={{
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: 'Jobs',
          tabBarIcon: ({color}) => (
            <Icon name="add-circle" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Icon name="people" color={color} size={24} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const AuthStack = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      // drawerActiveBackgroundColor:'#03204c',
      headerShown: false,
    }}
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      options={{headerShown: false}}
      name="Home"
      component={TabsScreen}
    />
    <Drawer.Screen
      options={{headerShown: false}}
      name="Account"
      component={TabsScreen}
    />
    <Drawer.Screen
      options={{headerShown: false}}
      name="Jobs"
      component={TabsScreen}
    />
    <Drawer.Screen
      options={{headerShown: false}}
      name="Chats"
      component={TabsScreen}
    />
    <Drawer.Screen
      options={{headerShown: false}}
      name="Logout"
      component={TabsScreen}
    />
  </Drawer.Navigator>
);

export default AuthStack;

import React, {useEffect} from 'react';
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
import '../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
import {t} from 'i18next';

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation, route}) => {
  console.log(route);
  const tabHiddenRoutes = [
    'Chat',
    'ChatScreen',
    'Map',
    'Forgot Password',
    'Verify',
    'Login',
  ];
  if (
    tabHiddenRoutes.includes(
      getFocusedRouteNameFromRoute(route) && tabHiddenRoutes?.includes('Login'),
    )
  ) {
    navigation.setOptions({
      tabBarStyle: {display: 'none'},
      tabBarVisible: false,
    });
  } else if (tabHiddenRoutes?.includes('Login')) {
    navigation.setOptions({
      tabBarStyle: {display: 'none'},
      tabBarVisible: false,
    });
  } else {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
  const {t, i18n} = useTranslation();
  return (
    <HomeStack.Navigator initialRouteName={Login}>
      <HomeStack.Screen
        options={{
          headerTitleAlign: 'center',
          title: t('Login'),
          drawerLockMode: 'locked-closed',
        }}
        name="Login"
        component={Login}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Home')}}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Forgot Password')}}
        name="Forgot Password"
        component={ForgotPass}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Verify')}}
        name="Verify"
        component={Verify}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Change Password')}}
        name="Change Password"
        component={ChangePass}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Service')}}
        name="Service"
        component={Service}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="TestimonialSection"
        component={TestimonialSection}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Service Details')}}
        name="Service Details"
        component={ServiceDetails}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="DropDown"
        component={DropDown}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Order List')}}
        name="MainService"
        component={mainScreenSS}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Details')}}
        name="Details"
        component={Details}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Profile')}}
        name="Profile"
        component={Profile}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Edit_Profile')}}
        name="Edit_Profile"
        component={EditProfile}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Update Password')}}
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
        options={{headerTitleAlign: 'center', title: t('Thankyou')}}
        name="Thankyou"
        component={Thankyou}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Map')}}
        name="Map"
        component={Map}
      />

      <HomeStack.Screen
        options={{headerTitleAlign: 'center', title: t('Review')}}
        name="Review"
        component={Review}
      />
    </HomeStack.Navigator>
  );
};

const ChatStack = createStackNavigator();
const ChatStackScreen = () => {
  const {t, i18n} = useTranslation();

  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        options={{headerTitleAlign: 'center'}}
        name="Chat"
        component={MessagesScreen}
      />
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
  const {t, i18n} = useTranslation();

  return (
    <ProfileScreen.Navigator>
      <ProfileScreen.Screen
        options={{headerTitleAlign: 'center', title: t('Profile')}}
        name="FirstTabProfile"
        component={Profile}
      />
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
  const {t, i18n} = useTranslation();

  return (
    <Tabs.Navigator
      barStyle={{backgroundColor: '#0047AB'}}
      tabBarOptions={{
        activeTintColor: '#03204c',
        inactiveTintColor: 'grey',
        keyboardHidesTabBar: true,
      }}
      screenOptions={{
        tabBarStyle: {height: 40},
      }}>
      <Tabs.Screen
        name="TabHome"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('Home'),
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
          tabBarLabel: t('Jobs'),
          tabBarIcon: ({color}) => (
            <Icon name="add-circle" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="TabProfile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarColor: '#00A36C',
          tabBarLabel: t('Account'),
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
    initialRouteName="TabHome"
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen
      options={{headerShown: false}}
      name={t('Home')}
      component={TabsScreen}
    />
  </Drawer.Navigator>
);

export default AuthStack;

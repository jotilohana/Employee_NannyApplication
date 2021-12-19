import  React from 'react';
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
import DropdownChat from '../src/Screens/dropdownChat';
import Attachment from '../src/Screens/Attachment';
import Thankyou from '../src/Screens/thankyou';
import Map from '../src/Screens/Map';
import mainScreenSS from '../src/Screens/mainpage_selectedService';
import Review from '../src/Screens/review';
import HeaderImage from '../src/Screens/HeaderImage';

const Stack = createStackNavigator();
const AuthStack =()=> {
    return(
      <Stack.Navigator>
        

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Login" component={Login} />

          <Stack.Screen name="Home" component={HomeScreen} 
          options={{headerTitleAlign:'center'}} 
          />
  
            <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="Forgot Password" component={ForgotPass} />
          
          <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="Verify" component={Verify} />

          <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="Change Password" component={ChangePass} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Service" component={Service} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="TestimonialSection" component={TestimonialSection} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Service Details" component={ServiceDetails} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="DropDown" component={DropDown} />

        <Stack.Screen 
        options={{headerTitleAlign:'center',  headerShadowVisible: false,}} 
          name="MainService" component={mainScreenSS} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Details" component={Details} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Profile" component={Profile} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Edit Profile" component={EditProfile} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Update Password" component={UpdatePass} />

        <Stack.Screen 
        options={({route})=>({
          title:<HeaderImage />,
          headerRight: () => (
              <DropdownChat />
              ),
        })} 
          name="ChatScreen" component={Chat} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Chat" component={MessagesScreen} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="HeaderImage" component={HeaderImage} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="DropdownChat" component={DropdownChat} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Attachment" component={Attachment} />

        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Thankyou" component={Thankyou} />

        <Stack.Screen
        options={{headerTitleAlign:'center'}} 
        name="Map" component={Map} />

        <Stack.Screen
        options={{headerTitleAlign:'center',}} 
        name="Review" component={Review} />

      </Stack.Navigator>
    );
  };
export default AuthStack;
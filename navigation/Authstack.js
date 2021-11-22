import  React,{useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../src/Screens/OnboardingScreen';
import HomeScreen from '../src/Screens/HomeScreen';
import Login from '../src/Screens/Login';
import SignUp from '../src/Screens/SignUp';
import ForgotPass from '../src/Screens/Forgot_Pass';
import Verify from '../src/Screens/Verify_Email';
import ChangePass from '../src/Screens/Change_Pass';
import AsyncStorage  from '@react-native-community/async-storage';
import FAQ from '../src/Screens/FAQ';
import Service from '../src/Screens/Service';
import TestimonialSection from '../src/Screens/testimonialSection';
import ServiceDetails from '../src/Screens/ServiceDetails';
import BookingForm from '../src/Screens/bookingform';
import Time from '../src/Screens/Time';
import DropDown from '../src/Screens/DropDown';
import SelectedService from '../src/Screens/SelectedService';
import Details from '../src/Screens/particularScreenDetails';

const Stack = createStackNavigator();
const AuthStack =()=> {

  const [isFirstLaunched, setIsFirstLaunched] =React.useState(null);
let routeName;
  useEffect(()=>{
    AsyncStorage.getItem('alreadylaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched', "true");
        setIsFirstLaunched(true)
      }
      else{
        setIsFirstLaunched(false)}
    });
  },[]);

  if(setIsFirstLaunched === null){
      return null;
  }
  else if(setIsFirstLaunched === true){
      routeName='Onboarding'}
      else{
          routeName ='Login';      
        }
    return(
      <Stack.Navigator 
      initialRouteName={routeName}
      >
        <Stack.Screen
          options={navData => {
            return {
              headerShadowVisible: false,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navData.navigation.navigate('Home')}
                  style={{backgroundColor:'#03204c',marginRight:10, padding:7, borderRadius:15}}
                  >
                  <Text style={{color: '#fff'}}> Skip </Text>
                </TouchableOpacity>
              ),
            };
          }}
          name=" "
          component={OnBoardingScreen}
        />
        <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Login" component={Login} />

          <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
        options={{headerTitleAlign:'center'}} 
          name="SignUp" component={SignUp} />

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
          name="FAQ" component={FAQ} />

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
          name="BookingForm" component={BookingForm} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Time" component={Time} />

           <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="DropDown" component={DropDown} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="SelectedService" component={SelectedService} />

          <Stack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Details" component={Details} />

      </Stack.Navigator>
    );
  };
export default AuthStack;
import  React,{useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from './src/Screens/OnboardingScreen';
import HomeScreen from './src/Screens/HomeScreen';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import ForgotPass from './src/Screens/Forgot_Pass';
import Verify from './src/Screens/Verify_PhoneNum';
import ChangePass from './src/Screens/Change_Pass';
import { AsyncStorage } from 'react-native';


const AppStack = createNativeStackNavigator();
function OnboardingNav(navigation){

  const [isFirstLaunched, setIsFirstLaunched] =React.useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadylaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched', "true");
        setIsFirstLaunched(true)
      }
      else{
        setIsFirstLaunched(false)}
    })
  },[]);

  if(setIsFirstLaunched === null){
      return null;
  }
  else if(setIsFirstLaunched === true){
    return(
      <NavigationContainer>
      <AppStack.Navigator>
      
        <AppStack.Screen
          options={navData => {
            return {
              headerShadowVisible: false,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navData.navigation.navigate('Home')}
                  style={{backgroundColor:'#03204c', padding:7, borderRadius:15}}
                  >
                  <Text style={{color: '#fff'}}> Skip </Text>
                </TouchableOpacity>
              ),
            };
          }}
          name=" "
          component={OnBoardingScreen}
        />
        <AppStack.Screen 
        options={{headerTitleAlign:'center'}} 
          name="Login" component={Login} />
      </AppStack.Navigator>
      </NavigationContainer>
    );
  }
  else{
    return( <Login />
      <SignUp />
      <
    )
  }
}
export default OnboardingNav;
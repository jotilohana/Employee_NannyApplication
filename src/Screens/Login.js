import React, { useState } from 'react';
import {
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import SyncStorage from 'sync-storage';
import axios from 'axios';
import baseURL from '../common/BaseUrl';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {


    const data = JSON.stringify({
      "email": email,
      "password": password
    });

    const config = {
      method: 'post',
      url: baseURL + '/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        if (response.data.success == true) {
          SyncStorage.set('id', response.data.token);
          console.log(response.token)

          navigation.navigate('Home')
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  const AlertScreen = () => {
    Alert.alert('Hey there..!');
  };
  return (
    <View style={ { backgroundColor: '#FAF6F5', flex: 1 } }>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <View style={ { height: '100%', overflow: 'hidden' } }>
          <View style={ styles.TopView }>
            <Image style={ styles.LOGO } source={ require('../Assets/LOGO.jpg') } />
          </View>
          <View style={ styles.BottomView }>
            <Text style={ styles.LoginText }>Login Account</Text>
            <TextInput
              style={ styles.input }
              placeholder="User Name or E-mail"
              keyboardType={ 'email-address' }
              placeholderTextColor="black"
              onChange={ (e) => setEmail(e) }
            />
            <TextInput
              secureTextEntry={ true }
              style={ styles.input }
              placeholder="Password"
              keyboardType={ 'password' }
              placeholderTextColor="black"
              onChange={ (e) => setPassword(e) }

            />
            <Text style={ styles.forgotPass }>
              <TouchableOpacity
                onPress={ () => navigation.navigate('Forgot Password') }>
                <Text style={ { color: 'black' } }>Forgot Password?</Text>
              </TouchableOpacity>
            </Text>
            <TouchableOpacity
              onPress={ () => navigation.navigate('Home') }
              style={ styles.button }>
              <Text style={ styles.buttonText }>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  TopView: {
    backgroundColor: '#03204c',
    height: '80%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    marginLeft: 5,
    marginRight: 5,
  },
  LOGO: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginTop: '7%',
    marginBottom: '20%',
  },
  line: {
    width: 200,
    backgroundColor: 'white',
    height: 1,
    margin: 'auto',
    alignSelf: 'center',
  },
  Bottomtext: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  BottomView: {
    bottom: '50%',
    backgroundColor: 'white',
    height: '65%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 25,
    padding: '10%',
    color: 'black',
    marginBottom: 50,
    overflow: 'hidden',
    paddingTop: 50,
  },
  LoginText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: '7%',
    marginBottom: '5%',
    padding: 0,
    color: 'black',
  },
  forgotPass: {
    marginTop: '2%',
    color: 'black',
    textAlign: 'right',
  },

  // LOGINBUTTON
  button: {
    backgroundColor: '#03204c',
    borderRadius: 20,
    padding: '5%',
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Login;

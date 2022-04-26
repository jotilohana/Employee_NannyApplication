import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import API_URL, {imageURL} from '../common/BaseUrl';
import syncStorage from 'sync-storage';

const Verify = ({navigation}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  //LANGUAGE CHANGE
  const {t, i18n} = useTranslation();

  const pressOtpVerify = () => {
    const __otp = Object.values(otp);
    const finalOtp = __otp[0] + __otp[1] + __otp[2] + __otp[3];
    //  console.log(finalOtp)

    const email = syncStorage.get('email');
    const data = JSON.stringify({
      email: email,
      otp: finalOtp,
    });

    var config = {
      method: 'post',
      url: API_URL + '/auth/otpverify',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success === true) {
          navigation.navigate('Change Password');
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, alignContent: 'center'}}>
      <View style={styles.TopView}>
        <Image style={styles.LOGO} source={require('../Assets/LOGO.jpg')} />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.headerText}>{t('Verify Email')}</Text>
        <KeyboardAvoidingView keyboardVerticalOffset={50} behavior={'padding'}>
          <Text style={styles.LoginText}>
            {t('Enter Code Sent on your Email')}
          </Text>
          <View>
            <View style={styles.otpContainer}>
              <View style={styles.otpBox}>
                <TextInput
                  autoFocus={true}
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={text => {
                    setOtp({...otp, 1: text});
                    text && secondInput.current.focus();
                  }}
                />
              </View>
              <View style={styles.otpBox}>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={text => {
                    setOtp({...otp, 2: text});
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus();
                  }}
                />
              </View>
              <View style={styles.otpBox}>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={text => {
                    setOtp({...otp, 3: text});
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus();
                  }}
                />
              </View>
              <View style={styles.otpBox}>
                <TextInput
                  style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={text => {
                    setOtp({...otp, 4: text});
                    !text && thirdInput.current.focus();
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={pressOtpVerify}
              // onPress={() => navigation.navigate('Change Password')}

              style={styles.button}>
              <Text style={styles.buttonText}>{t('Submit')}</Text>
            </TouchableOpacity>

            <View style={styles.EndView}>
              <Text style={styles.Endtext}>{t("Didn't receive a code?")}</Text>
              <TouchableOpacity onPress={() => alert('Resend')}>
                <Text style={styles.Endtext}>{t('Request Again')}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.BackTxt}>{t('Back To Login')}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  TopView: {
    backgroundColor: '#03204c',
    height: '60%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // overflow: 'hidden',
    marginLeft: 5,
    marginRight: 5,
  },
  LOGO: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginTop: '20%',
  },
  Bottomtext: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  BottomView: {
    // bottom: '30%',
    backgroundColor: 'white',
    height: '55%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 25,
    padding: '10%',
    color: 'black',
    marginBottom: '20%',
    marginTop: 'auto',
    overflow: 'hidden',
  },
  headerText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  LoginText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: '5%',
  },
  input: {
    height: 0,
    width: 0,
  },

  // LOGINBUTTON
  button: {
    backgroundColor: '#03204c',
    borderRadius: 20,
    padding: '5%',
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  // End portion
  EndView: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  Endtext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 13,
  },
  //   End back txt
  BackTxt: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
  },

  //OTP
  otpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
    alignContent: 'center',
  },
  otpBox: {
    border: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    margin: 3,
    width: 50,
  },
  otpText: {
    fontSize: 20,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    color: 'black',
  },
});
export default Verify;

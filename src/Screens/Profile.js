import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SyncStorage from 'sync-storage';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

import baseurl from '../common/BaseUrl';
import action from '../common/Api';

const Profile = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [text, onChangeText] = React.useState();
  const id = SyncStorage.get('id');
  const [post, setPost] = React.useState([]);
  //   console.log(`/auth/dashboard/${id}`);
  //   return false;
  React.useEffect(() => {
    action
      .get(`/auth/dashboard/${id}`)
      .then(response => {
        setPost(response.data.Data);
        // console.log(response.data.Data);
      })
      .then(err => {
        console.log(err);
      });
  }, []);
  // console.log(post);

  // return false;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View style={styles.ImageView}>
            <Image
              style={styles.profilePicture}
              source={require('../Assets/profile2.jpg')}
            />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>{post.name}</Text>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/User.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Full name')}</Text>
              <Text style={styles.input}>{post.name}</Text>
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Email.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Email')}</Text>
              <Text style={styles.input}>{post.email}</Text>
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Call.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Phone number')}</Text>
              <Text style={styles.input}>{post.phone}</Text>
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Address.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Address')}</Text>
              <Text style={styles.input}>{post.phone}</Text>
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/City.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Town')}</Text>
              <Text style={styles.input}>{post.city}</Text>
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Gender.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Gender')}</Text>
              <Text style={styles.input}>{post.gender}</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity
            style={styles.EditButton}
            onPress={() => navigation.navigate('Edit_Profile')}>
            <Text style={styles.EditText}>{t('Edit profile')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.EditButton}
            onPress={() => navigation.navigate('Change Address')}>
            <Text style={styles.EditText}>{t('Change address')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#b4cce4',
    height: 100,
    padding: 2,
    flexDirection: 'row',
  },
  ImageView: {
    height: 70,
    borderRadius: 50,
    marginTop: 45,
    marginLeft: 10,
    width: 75,
  },
  profilePicture: {
    height: 90,
    borderRadius: 50,
    width: 90,
  },
  headerTextView: {
    marginTop: 60,
    marginLeft: 30,
  },
  headerText: {
    color: '#03204c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainView: {
    marginTop: 50,
  },
  InputFieldView: {
    margin: 20,
    marginTop: 0,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 10,
    paddingLeft: 20,
    overflow: 'hidden',
    padding: 5,
    elevation: 5,
  },
  inputTextView: {
    marginLeft: 20,
  },
  InputIcon: {
    marginTop: 16,
  },
  input: {
    padding: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputText: {
    margin: 0,
    marginTop: 5,
    padding: 0,
    color: 'black',
  },

  EditButton: {
    margin: 10,
    backgroundColor: '#03204c',
    borderRadius: 20,
    marginTop: 'auto',
    width: wp('40%'),
    alignSelf: 'center',
  },
  EditText: {
    color: 'white',
    textAlign: 'center',
    margin: 8,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
export default Profile;

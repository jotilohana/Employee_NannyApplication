import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SyncStorage from 'sync-storage';
import action from '../common/Api';
import baseUrl from '../common/BaseUrl';
import axios from 'axios';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const EditProfile = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [textN, onChangeTextN] = useState();
  const [textG, onChangeTextG] = useState();
  const [textA, onChangeTextA] = useState();
  const [textC, onChangeTextC] = useState();
  const [textE, onChangeTextE] = useState();
  const [textP, onChangeTextP] = useState();

  const id = SyncStorage.get('id');
  // for update profile
  const onPressUpdateProfile = () => {
    var payload = JSON.stringify({
      name: textN,
      phone: textP,
      gender: textG,
    });
    var config = {
      method: 'put',
      url: baseUrl + `/auth/updateprofile/${id}`,
      headers: {
        authorization: 'afds',
        'Content-Type': 'application/json',
      },
      data: payload,
    };

    axios(config)
      .then(function (response) {
        if (response.data.success == 'success') {
          alert('data updated successfully');
        } else {
          alert('data Not updated successfully');
        }
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [post, setPost] = useState([]);

  React.useEffect(() => {
    action
      .get(`/auth/dashboard/${id}`)
      .then(response => {
        setPost(response.data.Data);
        // console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.ImageView}>
          <Image
            style={styles.profilePicture}
            source={require('../Assets/profile2.jpg')}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Image style={styles.edit} source={require('../Assets/Edit.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/User.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Full Name')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextN}
                value={textN}
                placeholder={post.name}
                placeholderTextColor="grey"
              />
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Email.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Email')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextE}
                value={textE}
                placeholder={post.email}
                placeholderTextColor="grey"
              />
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/password.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Password')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextP}
                value={textP}
                placeholder="*******"
                placeholderTextColor="grey"
              />
            </View>
            <TouchableOpacity
              style={styles.changepass}
              onPress={() => navigation.navigate('Update Password')}>
              <Text style={styles.Change}>{t('Change')}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Call.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Phone number')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextP}
                value={textP}
                placeholder={post.phone}
                placeholderTextColor="grey"
              />
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Address.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Address')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextA}
                value={textA}
                placeholder={post.address}
                placeholderTextColor="grey"
              />
            </View>
            <TouchableOpacity
              style={styles.changeAddress}
              onPress={() => navigation.navigate('Update Password')}>
              <Text style={styles.Change}>{t('Change')}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/City.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Town')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextC}
                value={textC}
                placeholder={post.city}
                placeholderTextColor="grey"
              />
            </View>
          </View>

          <View style={styles.InputFieldView}>
            <Image
              style={styles.InputIcon}
              source={require('../Assets/Gender.png')}
            />
            <View style={styles.inputTextView}>
              <Text style={styles.inputText}>{t('Gender')}</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeTextG}
                value={textG}
                placeholder={post.gender}
                placeholderTextColor="grey"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          //  onPress={this.onPressSignUp.bind(this)}
          onSubmit={onPressUpdateProfile}
          style={styles.EditButton}>
          <Text style={styles.EditText}>{t('Save changes')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#b4cce4',
    height: 100,
    padding: 2,
    flexDirection: 'row',
    marginBottom: 60,
  },
  ImageView: {
    height: 70,
    borderRadius: 50,
    marginTop: 45,
    marginLeft: 10,
    width: 90,
  },
  profilePicture: {
    height: 90,
    borderRadius: 50,
    width: 90,
  },
  editIcon: {
    marginTop: 'auto',
    marginLeft: 75,
    backgroundColor: '#03204c',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  edit: {
    alignSelf: 'center',
    marginTop: 5,
  },
  mainView: {
    marginBottom: 40,
    height: 420,
  },
  InputFieldView: {
    margin: 20,
    marginTop: 0,
    marginBottom: 13,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: '80%',
    flexDirection: 'row',
    borderRadius: 10,
    paddingLeft: 20,
    overflow: 'hidden',
    padding: 3,
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
  },
  changepass: {
    marginLeft: 'auto',
    margin: 10,
    marginTop: 15,
  },
  changeAddress: {
    marginLeft: 'auto',
    margin: 10,
    marginTop: 8,
    marginBottom: 0,
  },
  Change: {
    fontWeight: 'bold',
    color: '#03204c',
  },
  EditButton: {
    backgroundColor: '#03204c',
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
    margin: 10,
    borderRadius: 20,
  },
  EditText: {
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
export default EditProfile;

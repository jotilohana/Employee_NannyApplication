import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import SyncStorage from 'sync-storage';

import baseurl, {imageURL} from '../common/BaseUrl';
import action from '../common/Api';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const Service = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const id = SyncStorage.get('id');
  // const name = SyncStorage.get('name');
  // const email = SyncStorage.get('email');

  // console.log(id);
  // console.log(name);
  // console.log(email);

  const [DATA, setPost] = React.useState([]);
  React.useEffect(() => {
    action.get('/service').then(response => {
      setPost(response.data.data);
    });
  }, []);

  if (!DATA) return null;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, height: '100%'}}>
        <View style={styles.headerText}>
          <Text style={styles.headerText}>{t('Services')}</Text>
        </View>

        {DATA.map(item => {
          return (
            <View style={styles.MainView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Service Details', {
                    itemId: item._id,
                    otherParam: 'anything you want here',
                  })
                }>
                <View key={item.id} style={styles.container}>
                  <View style={styles.imageView}>
                    <Image
                      source={{uri: imageURL + item.image}}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.text}>{item.heading}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  MainView: {
    height: 200,
    margin: 20,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageView: {
    width: '100%',
    height: '50%',
    marginTop: 10,
  },
  textView: {
    marginBottom: 100,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Service;

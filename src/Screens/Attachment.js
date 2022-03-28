import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const Attachment = () => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.mainView}>
      <View style={{height: 60, marginBottom: 30}}>
        <View
          style={{
            margin: 10,
            width: 60,
            backgroundColor: '#03204c',
            borderRadius: 50,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../Assets/image.png')} />
        </View>
        <Text style={{textAlign: 'center'}}>{t('Image')}</Text>
      </View>
      <View style={{height: 60, marginBottom: 30}}>
        <View
          style={{
            margin: 10,
            width: 60,
            backgroundColor: '#03204c',
            borderRadius: 50,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../Assets/video.png')} />
        </View>
        <Text style={{textAlign: 'center'}}>{t('Video')}</Text>
      </View>
      <View style={{height: 60, marginBottom: 30}}>
        <View
          style={{
            margin: 10,
            width: 60,
            backgroundColor: '#03204c',
            borderRadius: 50,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../Assets/document.png')} />
        </View>
        <Text style={{textAlign: 'center'}}>{t('Document')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 210,
    margin: 20,
    borderRadius: 25,
  },
});
export default Attachment;

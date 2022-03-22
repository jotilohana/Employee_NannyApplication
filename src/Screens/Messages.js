import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const MessagesScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => navigation.navigate('ChatScreen')}>
        <Text style={styles.button}>{t('Live CS')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  buttonView: {
    backgroundColor: '#03204c',
    width: '50%',
    borderRadius: 20,
    padding: 5,
  },
  button: {
    textAlign: 'center',
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default MessagesScreen;

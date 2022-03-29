import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';
export default function DrawerContent({navigation}) {
  const {t, i18n} = useTranslation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <DrawerContentScrollView>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" color="#03204c" size={24} />
          <Text style={{color: '#03204c', fontSize: 20, marginLeft: 10}}>
            {t('Home')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubbles" color="#03204c" size={24} />
          <Text style={{color: '#03204c', fontSize: 20, marginLeft: 10}}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Service')}>
          <Icon name="add-circle" color="#03204c" size={24} />
          <Text style={{color: '#03204c', fontSize: 20, marginLeft: 10}}>
            {t('Jobs')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="people" color="#03204c" size={24} />
          <Text style={{color: '#03204c', fontSize: 20, marginLeft: 10}}>
            {t('Account')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItemStyle}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="people" color="#03204c" size={24} />
          <Text style={{color: '#03204c', fontSize: 20, marginLeft: 10}}>
            {t('Logout')}
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerItemStyle: {
    padding: 5,
    marginTop: 30,
    margin: 10,
    flexDirection: 'row',
  },
  click: {
    padding: 5,
    marginTop: 30,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#03204c',
    opacity: 0.2,
  },
});

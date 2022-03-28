import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Review from './review';
import TestimonialSection from './testimonialSection';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const HomeScreen = ({navigation}) => {
  //LANGUAGE CHANGE
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.mainView}>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 10,
          marginLeft: 10,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            margin: 10,
          }}>
          {t('Latest Order')}
        </Text>
        <View style={{marginLeft: 'auto'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainService')}
            style={{
              backgroundColor: '#03204c',
              padding: 5,
              borderRadius: 25,
              margin: 10,
            }}>
            <Text style={{color: 'white'}}>{t('View All')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.cardView}>
          <View style={styles.ImgView}>
            <View style={{marginRight: 10}}>
              <Image
                style={styles.image}
                source={require('../Assets/Background_Images.jpg')}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>In Process</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondView}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 2,
                borderColor: '#F4ECF7',
              }}>
              <Text style={styles.Text}>Service Name</Text>
              <Image
                style={styles.Dots}
                source={require('../Assets/Dots.png')}
              />
            </View>
            <View
              style={{
                paddingBottom: 5,
                marginTop: 15,
                borderBottomWidth: 2,
                borderColor: '#F4ECF7',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.TimeIcon}
                  source={require('../Assets/Time.png')}
                />
                <Text style={{fontSize: 15, marginRight: 4}}>
                  {t('Service Time')}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#03204c',
                    marginRight: 10,
                  }}>
                  12:00Am
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#03204c',
                    marginRight: 10,
                  }}>
                  {t('To')}
                </Text>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#03204c'}}>
                  12:00Pm
                </Text>
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.TimeIcon}
                  source={require('../Assets/date.png')}
                />
                <Text style={{fontSize: 15, marginRight: 4}}>
                  {' '}
                  {t('Service Date')}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#03204c',
                    marginRight: 10,
                  }}>
                  22-Nov-21
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#03204c',
                    marginRight: 10,
                  }}>
                  {t('To')}
                </Text>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#03204c'}}>
                  29-Nov-21
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.review}>
        <TestimonialSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  cardView: {
    backgroundColor: 'white',
    height: 185,
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    elevation: 5,
  },
  ImgView: {
    width: '40%',
    height: 155,
    borderRadius: 20,
    margin: 5,
    marginRight: 0,
  },
  image: {
    height: 155,
    borderRadius: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#03204c',
    position: 'absolute',
    right: 80,
    top: 10,
    borderRadius: 10,
    padding: 3,
    height: 23,
    width: 70,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  //Second Portion
  secondView: {
    padding: 5,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03204c',
    paddingBottom: 5,
  },
  Dots: {
    marginLeft: 'auto',
    marginTop: 5,
  },
  TimeIcon: {
    marginRight: 3,
  },
  SubText: {
    marginRight: 10,
  },
  subTextheader: {
    marginTop: 10,
  },
});
export default HomeScreen;

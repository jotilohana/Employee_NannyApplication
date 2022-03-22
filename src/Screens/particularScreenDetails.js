import React from 'react';
import VerticalIndicator from './VerticalIndicator';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const ParticularScreenDetails = ({navigation}) => {
  const {t, i18n} = useTranslation();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fffff',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 300,
          marginLeft: 10,
          marginRight: 10,
          marginTop: '5%',
        }}>
        <View
          style={{
            height: 280,
            margin: 20,
            marginTop: 0,
            marginRight: 5,
            marginLeft: 10,
            width: '50%',
          }}>
          <VerticalIndicator />
        </View>
        <View style={{height: 300, marginRight: 30}}>
          <View
            style={{
              backgroundColor: '#03204c',
              borderRadius: 50,
              height: 100,
              width: 100,
              marginTop: 100,
              marginLeft: 40,
            }}>
            <Image
              style={styles.profile}
              source={require('../Assets/Services/Meal.png')}
            />
            <View
              style={{flexDirection: 'row', alignSelf: 'center', margin: 10}}>
              <Text style={{margin: 5}}>{t('Track')}</Text>
              <Text style={{margin: 5}}>{t('Call')}</Text>
              <Text style={{margin: 5}}>{t('Msg')}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                margin: 10,
                marginTop: 0,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map');
                }}>
                <Image
                  style={{margin: 3, marginTop: 0}}
                  source={require('../Assets/track.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map');
                }}>
                <Image
                  style={{margin: 3, marginTop: 0}}
                  source={require('../Assets/Call.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Chat');
                }}>
                <Image
                  style={{margin: 3, marginTop: 0}}
                  source={require('../Assets/msg.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', height: '72%'}}>
        <View
          style={{
            backgroundColor: '#03204c',
            borderRadius: 5,
            height: '60%',
            width: '80%',
            marginLeft: 'auto',
            paddingLeft: 20,
            paddingTop: 20,
            marginRight: 10,
          }}>
          <Text
            style={{
              color: 'white',
              marginBottom: 0,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Customer Name
          </Text>
          <View
            style={{
              margin: 5,
              marginTop: 0,
              marginRight: 20,
              padding: 5,
            }}>
            <View style={styles.BookingView}>
              <Text style={styles.ViewText}>{t('Service Name')}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: 10,
                  }}>
                  Nannies
                </Text>
              </View>
            </View>
            <View style={styles.BookingView}>
              <Text style={styles.ViewText}>{t('Work Time')}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: 10,
                  }}>
                  12:00AM
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: 10,
                  }}>
                  {t('To')}
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
                  12:00PM
                </Text>
              </View>
            </View>
            <View style={styles.BookingView}>
              <Text style={styles.ViewText}>{t('Working Days')}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: 10,
                  }}>
                  22-Nov-21
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: 10,
                  }}>
                  {t('To')}
                </Text>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
                  29-Nov-21
                </Text>
              </View>
            </View>
            <View style={styles.BookingView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.ViewText}>{t('Address')}</Text>
                <TouchableOpacity style={{marginTop: 3, marginLeft: 5}}>
                  <Image source={require('../Assets/Location.png')} />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    marginRight: 10,
                  }}>
                  115, Filler text is text that shares some characteristic
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.Reviewbutton}
            onPress={() => navigation.navigate('Review')}>
            <Text style={styles.reviewText}>{t('Review')}</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.profile2}
          source={require('../Assets/profile2.jpg')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  profile2: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    position: 'absolute',
    top: 20,
    borderRadius: 10,
    marginLeft: 5,
  },
  locationIcon: {
    marginTop: 4,
  },
  BookingView: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  ViewHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bookingHeaderSubText: {
    marginLeft: 'auto',
    color: 'white',
    fontWeight: 'bold',
  },
  ViewText: {
    color: 'silver',
  },
  button: {
    backgroundColor: '#03204c',
    marginLeft: 'auto',
    padding: 3,
    borderRadius: 20,
    width: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  Reviewbutton: {
    backgroundColor: 'white',
    marginTop: 'auto',
    margin: 10,
    padding: 5,
    borderRadius: 20,
    width: 230,
    marginBottom: 30,
  },
  reviewText: {
    fontWeight: 'bold',
    color: '#03204c',
    textAlign: 'center',
  },
});

export default ParticularScreenDetails;

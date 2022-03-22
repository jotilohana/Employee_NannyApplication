import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import '../../assets/i18n/i18n';
import {useTranslation} from 'react-i18next';

const Messages = [
  {
    id: '1',
    status: 'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/support.png'),
  },
  {
    id: '2',
    status: 'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/Meal.png'),
  },
  {
    id: '3',
    status: 'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/Eldercare.png'),
  },
  {
    id: '4',
    status: 'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/Maintenance.png'),
  },
  {
    id: '5',
    status: 'Rejected',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/housekeeper.png'),
  },
];

const PastMessages = [
  {
    id: '1',
    status: 'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/Meal.png'),
  },
  {
    id: '2',
    status: 'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/support.png'),
  },
  {
    id: '3',
    status: 'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/Maintenance.png'),
  },
  {
    id: '4',
    status: 'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/housekeeper.png'),
  },
  {
    id: '5',
    status: 'Completed',
    serviceName: 'Service Name',
    initailTime: '12:00Am',
    finalTime: '12:00Pm',
    initailDate: '22-Nov-21',
    finalDate: '29-Nov-21',
    image: require('../Assets/Services/Eldercare.png'),
  },
];

const MainPageSS = ({navigation}) => {
  const [currentState, setCurrentState] = useState(true);
  const [pastState, setPastState] = useState(false);
  const {t, i18n} = useTranslation();

  const Data = ({item}) => {
    return (
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details')}
          // onPress={()=>navigation.navigate("Booking Form")}
        >
          <View style={styles.cardView}>
            <View style={styles.ImgView}>
              <View style={{marginRight: 10}}>
                <Image style={styles.image} source={item.image} />
              </View>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText2}>{item.status}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.secondView}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  borderColor: '#F4ECF7',
                }}>
                <Text style={styles.Text}>{item.serviceName}</Text>
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
                    {item.initailTime}
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
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#03204c',
                    }}>
                    {item.finalTime}
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
                    {item.initailDate}
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
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#03204c',
                    }}>
                    {item.finalDate}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const CurrentSelectedService = ({navigation}) => {
    return (
      <View style={{marginBottom: '40%'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={Data}
        />
      </View>
    );
  };

  const PastSelectedService = ({navigation}) => {
    return (
      <View style={{marginBottom: '40%'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PastMessages}
          keyExtractor={item => item.id}
          renderItem={Data}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => {
            setCurrentState(true), setPastState(false);
          }}
          style={currentState ? styles.buttonClicked : styles.button}>
          <Text style={styles.buttonText}>{t('Current')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPastState(true), setCurrentState(false);
          }}
          style={pastState ? styles.buttonClicked : styles.button}>
          <Text style={styles.buttonText}>{t('Past')}</Text>
        </TouchableOpacity>
      </View>
      <View>
        {pastState ? <PastSelectedService /> : <CurrentSelectedService />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    paddingBottom: 10,
    backgroundColor: 'white',
    width: '99%',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonClicked: {
    padding: 8,
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    padding: 8,
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    textAlign: 'center',
    width: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  //PRESENT
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
    width: '35%',
    height: 155,
    borderRadius: 20,
    margin: 5,
    marginTop: 15,
  },
  image: {
    height: 155,
    borderRadius: 20,
    width: '100%',
  },
  button2: {
    backgroundColor: '#03204c',
    position: 'absolute',
    right: 68,
    height: 20,
    top: 0,
    borderRadius: 10,
    padding: 2,
    width: 70,
  },
  buttonText2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  //Second Portion
  secondView: {
    padding: 5,
    paddingLeft: 0,
    width: '60%',
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
    marginRight: '2%',
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

export default MainPageSS;

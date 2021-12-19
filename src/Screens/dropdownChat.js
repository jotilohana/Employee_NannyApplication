import React, {Component, useState} from 'react'
import {
  FlatList,
  Text,
  Pressable,
  View,
  Alert,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'
import SearchBar from './Searchbar';

const DropdownChat = () => {
  const [clickedBtn, setClickedBtn] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const List = () => {
    return (
      <View style={styles.listMainView}>
        <View style={styles.listSecondView}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>
              Add Member
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.buttonstyle}>
        {clickedBtn ? List() : null}
        <TouchableOpacity
          onPress={() => {
            setClickedBtn(!clickedBtn)
          }}>
          <Image
            style={{marginLeft: 'auto'}}
            source={require('../Assets/Dots.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{width:'80%'}}>
        <Modal
        style={styles.modelStyle}
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <SearchBar />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listMainView: {
    marginLeft: 'auto',
  },
  listSecondView: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    padding: 15,
  },
  buttonstyle: {
    marginLeft: 'auto',
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
  // Modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    width:'80%',
    alignSelf:'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default DropdownChat

import React, {useState} from 'react'
import {
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

const Messages = [
  {
    id: '1',
    userName: 'Jenny',
    userImg: require('../Assets/profile2.jpg'),
  },
  {
    id: '2',
    userName: 'John',
    userImg: require('../Assets/profile2.jpg'),
  },
  {
    id: '3',
    userName: 'Ken',
    userImg: require('../Assets/profile2.jpg'),
  },
]

const Search = () => {
  const [filterData, setFilterData] = useState(Messages)
  const [search, setSearch] = useState('')
  const SearchBar = (text) => {
    if (text) {
      const newData = filterData.filter(item => {
        const itemData = item.userName
          ? item.userName.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setFilterData(newData)
      setSearch(text)
    } else {
      setFilterData(Messages)
      setSearch(text)
    }
  }

  const ChatList = ({item}) => {
    return (
      <View>
        <TouchableOpacity style={styles.subView}>
          <View style={styles.UserInfo}>
            <Image style={styles.Image} source={item.userImg} />
            <Text style={styles.text}>{item.userName.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View
      style={{
        width: '100%',
        borderRadius: 5,
        paddingLeft: 20,
        marginBottom: 15,
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginTop: 15}}
          source={require('../Assets/Search.png')}
        />
        <TextInput
          style={{color:'black'}}
          placeholder='Search User!'
          placeholderTextColor='black'
          value={search}
          onChangeText={text => SearchBar(text)}
        />
      </View>
        <FlatList
          data={filterData}
          keyExtractor={item => item.id}
          renderItem={ChatList}
        />
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Member</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  UserInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  text: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    color: 'black',
    margin: 15,
  },
  button: {
    backgroundColor: '#03204c',
    width: '50%',
    marginLeft: 'auto',
    borderRadius: 20,
    padding: 7,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
  },
})

export default Search

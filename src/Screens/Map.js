import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { GOOGLE_PROVIDER, Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding'; 

const Map = () => {

  Geocoder.init('AIzaSyCJJ8PpjscKNaaG7MT_H-Wi-WaKTyJEj6M'); 
  const [address, setAddress]= useState()
  const [position, setPosition] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
      Geocoder.from(crd.latitude, crd.longitude)
                    .then(json => {
                        console.log(json);
	  	var addressComponent = json.results[0].address_components;
                  setAddress(addressComponent)
                  console.log(addressComponent);
                    })
                    .catch(error => console.warn(error));
            // },
    })

    .catch((err) => {
      console.log(err);
      
    });
  }, []);
        return ( 
            <View style = {{ flex: 1 } } >
            <MapView provider = { GOOGLE_PROVIDER }
            style = { styles.map }
            region = {
                {  
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            > 
            <Marker
                coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
                }}
                pinColor="red"
            />
            </MapView>

            </View>
        );
    }
    //create our styling code:
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default Map;
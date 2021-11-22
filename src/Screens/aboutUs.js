import React from 'react';
import {View, Text, StyleSheet,ImageBackground} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const AboutUs=()=>{
    return(
        <View style={{height:500,backgroundColor:"#03204c",borderRadius:25, margin:10,padding:10}}>    
        <VideoPlayer 
        video={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
        defaultMuted={true}
        videoHeight={600}
        videoWidth={800}
        autoplay={true}
        controls={true}
        />
        <View style={styles.textView}>
            <Text style={styles.text}>About Us</Text>
            <Text style={styles.Subtext}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise
                 generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter</Text>
            </View>
            <View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({

    img:{
        width:"100%",
        height:550
    },
    textView:{
        padding:20
    },
    text:{
        color:'white',
        fontSize:30,
    },
    Subtext:{
        color:"#fff"
    }

})
export default AboutUs;
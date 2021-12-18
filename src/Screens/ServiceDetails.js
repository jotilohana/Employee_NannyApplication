import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import TestimonialSection from './testimonialSection';


const ServiceDetails=({navigation},props)=>{
    const [showAbout,setShowAbout]=useState(true);
    const [showReview,setShowReview]=useState(false);
    const [pressedAbout, setPressedAbout]=useState(true);
    const [pressedReview, setPressedReview]=useState(false);

    const renderAbout=()=>{
            return(
             <View style={styles.textView}>
                <Text style={{color:'black'}}>Filler text is text that shares some characteristics
                 of a real written text, but is random or otherwise generated. It may be used to display a sample 
                 of fonts, enerate text for testing, or to spoof an e-mail spam filter. </Text>
            </View>
            );
    };
    const renderReview=()=>{
        return(
            <View style={styles.ReviewView}>
            <TestimonialSection />
            </View>
        )
    }
    return(
        <View style={styles.Main_view}>
        <View style={styles.headerView}>
        <Image
        style={styles.HeaderImage}
        source={require("../Assets/Background_Images.jpg")}
      />
        </View>
        <View style={styles.barView}>
             <TouchableOpacity
        style={styles.barButton}
        onPress={()=>{setShowAbout(true); setShowReview(false); setPressedAbout(true); setPressedReview(false)}}
      >
        <Text style={pressedAbout ? styles.barTextOnclick : styles.barText}>About</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.barButton}
        onPress={()=>{setShowReview(true); setShowAbout(false); setPressedReview(true); setPressedAbout(false)}}
      >
        <Text style={pressedReview ? styles.barTextOnclick : styles.barText}>Review</Text>
      </TouchableOpacity>
        </View>
        {showAbout? renderAbout():null}
        {showReview? renderReview(): null}
        <View style={styles.BottomView}>
        <TouchableOpacity
        style={styles.button}
        onPress={(props)=>navigation.navigate("Booking Form")}
      >
        <Text style={styles.buttonText}>Book Service</Text>
      </TouchableOpacity>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    Main_view:{
        flex:1,
    },
    headerView:{
        height:'35%'
    },
    HeaderImage:{
        height:'100%',
    },
    barView:{
        flexDirection:'row',
        width:'90%',
        margin:20,
        alignSelf:"center",
        justifyContent:"center",
        elevation:0.5,
        borderRadius:5,
        position:'absolute',
        top:"28%",
        backgroundColor:'#fff'
    },
    barButton:{
        margin:15,
        marginLeft:30,
        marginRight:30
    },
    barText:{
        color:"grey",
        fontWeight:'bold',
        fontSize:16
    },
    barTextOnclick:{
        color:"#03204c",
        fontWeight:'bold',
        fontSize:16
    },
    textView:{
        marginTop:70,
        margin:30,
        fontSize:15,
        height:'40%'
    },
    ReviewView:{
        marginTop:25,
        margin:25,
    },
    BottomView:{
        backgroundColor:'#03204c',
        height:50,
        marginTop:'auto'
    },
    button:{
        width:120,
        backgroundColor:"#fff",
        borderRadius:10,
        margin:10,
        marginLeft:'auto',
    },
    buttonText:{
        color:'#03204c',
        textAlign:'center',
        padding:5,
        fontWeight:'bold',
        borderRadius:10,
    }

})

export default ServiceDetails;
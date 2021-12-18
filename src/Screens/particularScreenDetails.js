import React from 'react';
import VerticalIndicator from './VerticalIndicator';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ParticularScreenDetails=({navigation})=>{
    return(
        <View style={{margin:2, flex:1, backgroundColor:'#fffff'}}>
            <View style={{flexDirection:'row', height:300}}>
                <View style={{height:280,margin:20}}>
                    <VerticalIndicator />
                </View>
                <View style={{height:300}}>
                    <View style={{backgroundColor:"#03204c",borderRadius:50,height:100, width:100,marginTop:100,marginLeft:40}}>
                    <Image
                    style={styles.profile}
                    source={require('../Assets/Services/Meal.png')}
                    />
                    <View style={{flexDirection:'row', alignSelf:'center', margin:10}}>
                    <Text style={{margin:5}}>Track</Text>
                    <Text style={{margin:5}}>Call</Text>
                    <Text style={{margin:5}}>Msg</Text>                   
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center', margin:10, marginTop:0}}>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate("Map")}}
                        >
                       <Image
                    style={{margin:3, marginTop:0}}
                    source={require('../Assets/track.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={()=>{navigation.navigate("Map")}}

                        >
                    <Image
                    style={{margin:3,marginTop:0}}
                    source={require('../Assets/Call.png')}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate("Chat")}}

                        >
                     <Image
                    style={{margin:3, marginTop:0}}
                    source={require('../Assets/msg.png')}
                    />
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
             </View>
             <View style={{flexDirection:'row'}}>
                <View style={{backgroundColor:'#03204c', borderRadius:5, height:340,width:"80%",marginLeft:"auto", paddingLeft:20, paddingTop:20}}>
                    <Text style={{color:'white',marginBottom:5, fontSize:20, fontWeight:'bold'}}>Employee Name</Text>
                    <View style={{borderRadius:5,margin:5, marginRight:20, padding:5}}>
                        <View style={styles.BookingView}>
                        <Text style={styles.ViewText}>Service Name</Text>
                         <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white", marginRight:10}}>Nannies</Text>
                        </View>
                        </View>
                        <View style={styles.BookingView}>
                        <Text style={styles.ViewText}>Working Time</Text>
                         <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white", marginRight:10}}>12:00AM</Text>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white", marginRight:10}}>To</Text>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white"}}>12:00PM</Text>
                        </View>
                        </View>
                        <View style={styles.BookingView}>
                        <Text style={styles.ViewText}>Working Days</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white", marginRight:10}}>22-Nov-21</Text>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white", marginRight:10}}>To</Text>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white"}}>29-Nov-21</Text>
                        </View>
                        </View>
                        <View style={styles.BookingView}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.ViewText}>Address</Text>
                        <TouchableOpacity
                            style={{marginTop:3, marginLeft:5}}
                        >
                        <Image 
                        source={require('../Assets/Location.png')}
                        />
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={{fontSize:14,fontWeight:"bold", color:"white", marginRight:10}}>115, Filler text is text that shares some characteristic</Text>
                        
                        </View>
                        </View>
                        </View>
                        <TouchableOpacity
                            style={styles.Reviewbutton}
                        >
                        <Text style={styles.reviewText}>Review</Text>
                        </TouchableOpacity>

                        </View>
                        <Image
                         style={styles.profile2}
                        source={require('../Assets/profile2.jpg')}
                        />
                </View>
             </View>
    )
};

const styles=StyleSheet.create({
    profile:{
        width:100,
        height:100,
        borderRadius:50,
        alignSelf:'center'
    },
     profile2:{
        width:80,
        height:80,
        alignSelf:'center',
        position:'absolute',
        top:20,
        borderRadius:10
    },
    locationIcon:{
        marginTop:4
    },
    BookingView:{
        borderBottomColor:"grey",
        borderBottomWidth:1,  
        marginTop:10      
    },
    ViewHeaderText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    bookingHeaderSubText:{
        marginLeft:'auto',
        color:'white',
        fontWeight:'bold',
    },
    ViewText:{
        color:'silver',
    },
    button:{
        backgroundColor:'#03204c',
        marginLeft:'auto',
        padding:3,
        borderRadius:20,
        width:50
    },
    buttonText:{
        color:'white',
        textAlign:"center"
    },
    Reviewbutton:{
        backgroundColor:'white',
        marginTop:'auto',
        margin:10,
        padding:5,
        borderRadius:20,
        width:230
    },
    reviewText:{
        fontWeight:'bold',
        color:"#03204c",
        textAlign:'center'
    }
})

export default ParticularScreenDetails;
import React ,{useState} from 'react';
import {Text, SafeAreaView, View,StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Review=()=>{
    
    const [defaultRating, setDefaultRating]=useState(2)
    const [maxRating,setMaxRating]= useState([1,2,3,4,5])


    const emptyStar='../Assets/empty_star.png';
    const filledStar='../Assets/Filled_star.png';

    const CustomReview=()=>{
    return(
        <View style={styles.reviewView}>
           { 
           maxRating.map((item, key) => {
                return(
                    <TouchableOpacity
                    activeOpacity={0.7}
                    key={item}
                    onPress={()=>setDefaultRating(item)}
                    >
                    <Image 
                    style={styles.reviewIcon}
                    source={require('../Assets/Filled_star.png')
                    // item <=defaultRating
                    // ? {uri:filledStar}
                    // :{uri:emptyStar}
                    }
                    />
                    </TouchableOpacity>
                )
           })
            }
        </View>
    )
        };
return(
    <SafeAreaView style={{margin:10,paddingLeft:10}}>
        <CustomReview />
    </SafeAreaView>
);
};

const styles=StyleSheet.create({
    reviewView:{
        flexDirection:'row'
    },
    reviewIcon:{
        width:25,
        height:25,
        resizeMode:'cover'
    }
})
export default Review;
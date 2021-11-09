import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export default function MovieDetails({route}) {

    const imagepath= route.params.paramImage
    const [liked, setLiked] = useState(false);
    const dbRef=firestore().collection('users');
    
    const addToFavourites = async() => {
      await dbRef
      .add({
        email:auth().currentUser.email,
        favourites: route.params.paramName,
        poster: route.params.paramImage,
      })
      alert('Added to Favourites');
    }

    return (
        <>
        <StatusBar backgroundColor='#000000' barStyle="light-content"/>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor:"black" }}>
        <Image
                style={styles.logo}
                source={{
                    uri:'https://image.tmdb.org/t/p/original/'+imagepath,
                }}
        />
        <Text style={styles.title}>
         {route.params.paramName}
        </Text>
        <Text style={styles.text}>
        Release Date: {route.params.paramDate}
        </Text>
        <Text style={styles.text}>
         Ratings: {route.params.paramVote}
        </Text>
        <Text style={styles.text}>
         {route.params.paramView}
        </Text> 
        <View style={{paddingTop:20}}>     
        <TouchableOpacity style={styles.commandButton}  onPress={() => {addToFavourites(); setLiked(!liked) }} >
        <AntDesign  name={liked?"heart":"hearto"} size={40} color="#ffffff" /> 
          <Text style={styles.panelButtonTitle} >Add to favourites</Text>
        </TouchableOpacity>
       
        </View>
      </View>
      </>
    )
  }
  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: 20,
      color:"white",
    },
    text: {
      fontSize: 15,
      flexWrap: 'wrap',
      paddingTop: 20,
      color:"white",
    },
    logo:{
        width: 200,
        height: 250,
        paddingTop: 50
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color:"#fff",
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#000000',
        alignItems: 'center',
        marginTop: 10,
      },
  });
  

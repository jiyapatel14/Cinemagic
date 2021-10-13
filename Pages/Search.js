import React, { useState, useEffect } from 'react';
import {
Text,
View,
StyleSheet,
Image,
TextInput,
TouchableOpacity,
ActivityIndicator,
 } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

 export default Search = ({navigation}) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [queryText, setQueryText] = useState("")
  const searchMovies = async () => {
    try {
     const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=d90825d47218a3cfcae9c7f12291df14&query='+queryText);
     const json = await response.json();
     setData(json.results);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  return (
    <View style={styles.container}>
     <TextInput style={styles.searchbox}
      onChangeText={text=>
        setQueryText(text)
      }
      onSubmitEditing={searchMovies}
      value={queryText}
     />
      <View style={{ flex: 1, backgroundColor:"black" }}>
       
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {
                paramKey: item.id,
                paramName: item.title,
                paramDate: item.release_date,
                paramView: item.overview,
                paramImage: item.poster_path,
                paramVote: item.vote_average,
              })
              }>
            <View >
            <Text>
              <Image
                style={styles.logo}
                source={{
                    uri:'https://image.tmdb.org/t/p/original/'+item.poster_path,
                }}
              />
              <Text style={styles.text}>  {item.title} {item.name}  </Text>
            </Text>
            </View>
            </TouchableOpacity>
          )}
        />
      
    </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70 ,
    backgroundColor: '#212121',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingHorizontal: 20,
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: '100%',
    backgroundColor: '#FFF',
    color:'#000000',
    borderRadius: 8,
    marginBottom: 40,
  },
  text:{
    color:"white",
    fontSize: 20,
    justifyContent:"center",
    alignItems:"center",
    paddingRight:20,
  },
  logo:{
    width: 80,
    height: 120,
  },
}
);
 

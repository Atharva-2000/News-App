import { View, Text, Image, TouchableOpacity, Share, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';

const ReadNews = () => {

    const routes = useRoute()
    const navigation= useNavigation()
    const news = routes.params.news

    const shareNews = ()=>{
       Share.share({
        message: news.title+"\nRead More"+news.description
       })  
    }

    const {actions, newsImage, newsDescription, newsSource, newsTitle} = styles

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
         <View style={actions}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{shareNews()}}>
                <Ionicons name="share-outline" size={24} color="black" />
            </TouchableOpacity>
         </View>
         <Image source={{uri: news.urlToImage}} style={newsImage}/>
         <Text style={newsTitle}>{news.title}</Text>
         <Text style={newsSource}>{news.source.name}</Text>
         <Text style={newsDescription}>{news.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   actions:{
      marginTop: 10,
      marginBottom: 30, 
      flexDirection: 'row', 
      justifyContent: 'space-between'
   },
   newsImage:{
      height: 300, 
      width: '100%', 
      borderRadius: 15
   },
   newsTitle:{
      marginTop: 10, 
      fontSize: 22, 
      fontWeight: 'bold'
   },
   newsSource:{
      marginTop: 10, 
      color: Color.primary, 
      fontSize: 16
   },
   newsDescription:{
      marginTop: 20, 
      fontSize: 18, 
      color: Color.gray, 
      lineHeight: 30
   }
})

export default ReadNews
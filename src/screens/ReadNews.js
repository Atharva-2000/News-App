import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
//import * as Linking from 'expo-linking';
//import * as WebBrowser from 'expo-web-browser';

const ReadNews = () => {

    const routes = useRoute()
    const navigation= useNavigation()
    const news = routes.params.news

    const shareNews = ()=>{
       Share.share({
        message: news.title+"\nRead More"+news.description
       })  
    }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
         <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{shareNews()}}>
                <Ionicons name="share-outline" size={24} color="black" />
            </TouchableOpacity>
         </View>
         <Image source={{uri: news.urlToImage}} style={{height: 300, width: '100%', borderRadius: 15}}/>
         <Text style={{marginTop: 10, fontSize: 22, fontWeight:'bold'}}>{news.title}</Text>
         <Text style={{marginTop: 10, color: Color.primary, fontSize: 16}}>{news.source.name}</Text>
         <Text style={{marginTop: 10, fontSize: 18, color: Color.gray, lineHeight: 30}}>{news.description}</Text>
         <TouchableOpacity onPress={()=>{}}>
            <Text style={{fontWeight: 'bold', marginTop: 10, color: Color.primary, fontSize: 16}}>Read More</Text>
         </TouchableOpacity>
    </View>
  )
}

export default ReadNews
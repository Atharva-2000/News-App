import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

const HeadlineList = ({newsList}) => {

  const navigation = useNavigation()

  const {newsBox, newsHeadline, newsImage, newsSource, newsTitle, divider} = styles

  return (
    <View style={{marginTop: 8}}>
        <FlatList
           showsVerticalScrollIndicator={false}
           data={newsList}
           renderItem={({item,index})=>{
              return(
                 <View>
                    <TouchableOpacity style={newsBox} onPress={()=>{navigation.navigate('read-news', {news: item})}}>
                        <Image source={{uri: item.urlToImage}} style={newsImage}/>
                        <View style={newsHeadline}>
                            <Text numberOfLines={4} style={newsTitle}>{item.title}</Text>
                            <Text style={newsSource}>{item?.source?.name}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={divider}/>
                 </View>
              )
           }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
   newsBox:{
      marginTop: 22, 
      flexDirection: 'row'
   },
   newsImage:{
      width: 130, 
      height: 130, 
      borderRadius: 10
   },
   newsHeadline:{
      marginRight: 135, 
      marginLeft: 15
   },
   newsTitle:{
      fontSize: 18,
      fontWeight: 'bold'
   },
   newsSource:{
      color: Color.primary, 
      marginTop: 6
   },
   divider:{
      height: 1, 
      backgroundColor: Color.lightGray,
      marginTop: 13
   }
})

export default HeadlineList

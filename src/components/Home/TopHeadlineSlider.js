import React from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

const screenWidth = Dimensions.get('screen').width

const TopHeadlineSlider = ({newsList}) => {

  const navigation = useNavigation()

  const {newsBox, newsImage, newsSource, newsTitle} = styles

  return (
    <View style={{marginTop: 15}}>
         <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
           data={newsList}
           renderItem={({item,index})=>{
            return(
                <TouchableOpacity style={newsBox} onPress={()=>{navigation.navigate('read-news', {news: item})}}>
                    <Image source={{uri: item.urlToImage}} style={newsImage}/>
                    <Text numberOfLines={3} style={newsTitle}>{item.title}</Text>
                    <Text style={newsSource}>{item?.source?.name}</Text>
                </TouchableOpacity>
            )
           }}
         />
    </View>
  )
}

const styles = StyleSheet.create({
    newsBox:{
      width: screenWidth*0.80,
      marginRight: 15
    },
    newsImage:{
      height: screenWidth*0.76, 
      borderRadius: 10
    },
    newsTitle:{
      marginTop: 10, 
      fontSize: 23, 
      fontWeight: 'bold'
    },
    newsSource:{
      marginTop: 5, 
      color: Color.primary
    }
})

export default TopHeadlineSlider

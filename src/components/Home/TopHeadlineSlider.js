import React from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

const TopHeadlineSlider = ({newsList}) => {

  const navigation = useNavigation()

  const screenWidth = Dimensions.get('screen').width

  return (
    <View style={{marginTop: 15}}>
         <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
           data={newsList}
           renderItem={({item,index})=>{
            return(
                <TouchableOpacity style={{width: screenWidth*0.80, marginRight: 15}} onPress={()=>{navigation.navigate('read-news', {news: item})}}>
                    <Image source={{uri: item.urlToImage}} style={{height: screenWidth*0.76, borderRadius: 10}}/>
                    <Text numberOfLines={3} style={{marginTop: 10, fontSize: 23, fontWeight: 800}}>{item.title}</Text>
                    <Text style={{marginTop: 5, color: Color.primary}}>{item?.source?.name}</Text>
                </TouchableOpacity>
            )
           }}
         />
    </View>
  )
}

export default TopHeadlineSlider

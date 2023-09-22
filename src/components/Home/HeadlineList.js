import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

const HeadlineList = ({newsList}) => {

  const navigation = useNavigation()

  return (
    <View style={{marginTop: 8}}>
        <FlatList
           data={newsList}
           renderItem={({item,index})=>{
              return(
                 <View>
                    <TouchableOpacity style={{marginTop: 22, flexDirection: 'row'}} onPress={()=>{navigation.navigate('read-news', {news: item})}}>
                        <Image source={{uri: item.urlToImage}} style={{width: 130, height: 130, borderRadius: 10}}/>
                        <View style={{marginRight: 135, marginLeft: 15}}>
                            <Text numberOfLines={4} style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text style={{color: Color.primary, marginTop: 6}}>{item?.source?.name}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height: 1, backgroundColor: Color.lightGray, marginTop: 13}}/>
                 </View>
              )
           }}
        />
    </View>
  )
}

export default HeadlineList

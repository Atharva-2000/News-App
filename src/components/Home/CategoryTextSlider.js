import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'

const CategoryTextSlider = ({getTopheadline}) => {

    const [active, setActive] = useState(1)

    const categoryList = [
        {
            id: 1,
            name: 'Latest'
        },
        {
            id: 2,
            name: 'Science'
        },
        {
            id: 3,
            name: 'Sports'
        },
        {
            id: 4,
            name: 'Entertainment'
        },
        {
            id: 5,
            name: 'Business'
        },
        {
            id: 6,
            name: 'Technology'
        }
    ]

    const onCategoryClick = (id)=>{
        setActive(id)
        let categoryName = categoryList[id-1].name
      
        if(categoryName==="Latest")
          getTopheadline('general')
        else
          getTopheadline(categoryName)
    }

  return (
     <View style={{marginTop: 10}}>
        <FlatList
           horizontal
           showsHorizontalScrollIndicator={false}
           data={categoryList}
           renderItem={({item})=>{
             return(
                <TouchableOpacity onPress={()=>{onCategoryClick(item.id)}}>
                     <Text style={{marginRight: 10, fontSize: 24, fontWeight: 'bold', color: item.id===active ? Color.primary : Color.gray}}>{item.name}</Text>
                </TouchableOpacity>
             )
           }}
        />
     </View>
  )
}

export default CategoryTextSlider


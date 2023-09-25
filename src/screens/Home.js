import React, { useState, useEffect } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../components/Home/TopHeadlineSlider';
import HeadlineList from '../components/Home/HeadlineList';
import axios from 'axios';

const Home = () => {
   
   const [newsList, setNewsList] = useState([])
   const [loading , setLoading] = useState(false)

   useEffect(()=>{
      getTopheadline('general')
  },[])

  const getTopheadline = async(newsCategory)=>{
      setLoading(true)
      try{
          const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=7751e0252c8b49e4bf886d57b14e3f0e`)
          setNewsList(result.data.articles)
          setLoading(false)
        }
      catch(e){
         setLoading(false)
         console.warn("Some error in fetching data")
      }
  }

  const {appHeadingBox,appHeadingTitle,loadingBox} = styles

  return (
     <View style={{backgroundColor: 'white'}}>
         <View>
            <View style={appHeadingBox}>
                  <Text style={appHeadingTitle}>FactCheck News</Text>
                  <Ionicons name="notifications-outline" size={30} color="black" />
            </View>
            <CategoryTextSlider getTopheadline={getTopheadline}/>
            {
               loading ? (
                  <View style={loadingBox}>
                     <Text>Loading....</Text>
                     <ActivityIndicator size="large" />
                  </View>
               ):(
                    <View>
                        <TopHeadlineSlider newsList={newsList}/>
                        <HeadlineList newsList={newsList}/>
                    </View>
               )
            }
         </View>
     </View>
  )
}

const styles = StyleSheet.create({
   appHeadingBox:{
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between'
   },
   appHeadingTitle:{
      fontSize: 30, 
      fontWeight: 'bold', 
      color: Color.primary
   },
   loadingBox:{
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 50
   }
})

export default Home

import { 
  Linking, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style = {styles.headingText}>Action Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                Heya this is Sid trying out react native 
            </Text>
        </View>
        <Image 
          source= {{uri:"https://avatars.githubusercontent.com/u/80667996?v=4",}}
          style= {styles.cardImage}
        />
        <View
          style={styles.bodyContainer}
        >
          <Text numberOfLines={2}>
          With summer kicking in, you have the official licence to chill. A spanner in the works could be visas, with long waiting times—stretching into weeks, in some cases. Luckily, there are a whole host of countries that Indians can travel to without a visa.

          The catch, however, is that many of these are not easy to get to—some of them require spending what could feel like a lifetime in a connecting flight. But to help carve out your summer plans, here’s a list of countries that let Indian passport holders in without a visa and the validity period of the stay there:
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.linkStyle}
            onPress={()=> openWebsite('https://siddharthbisht.netlify.app/')}
          >
            <Text>My Portfolio Site Link</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkStyle}
            onPress={()=> openWebsite('https://github.com/OfficialSiddharthBisht')}
          >
            <Text>My Github Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}   

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight: 'bold',
      paddingHorizontal:8,
    },
    card:{
      width:300,
      height:350,
      borderRadius: 6,
      marginVertical:12,
      marginHorizontal:16,
    },
    elevatedCard:{
      backgroundColor:'#E07C24',
      elevation: 2,
      shadowOffset:{
        width:1,
        height: 1,
      },
      shadowColor:'#333',
      shadowOpacity:0.6,
    },
    headingContainer:{
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    headerText:{
      color:'#000',
      fontSize:16,
      fontWeight:'600',

    },   
    cardImage: {
      height:100,
    },
    bodyContainer:{
      padding:10,    
    },
    footerContainer:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    linkStyle:{
      fontSize:18,
      color:'grey',
      backgroundColor:'#fff',
      paddingHorizontal:11,
      paddingVertical:6,
      borderRadius:6,
    }
})
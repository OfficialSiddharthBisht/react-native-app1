import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style= {styles.headingText}>FancyCard</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>React Icon</Text>
            <Text style={styles.cardLablel}>Mern Stack</Text>
            <Text style={styles.cardDescription}>
                some random text here , as the description of the card and  some random text here , as the description of the card.
            </Text>
            <Text style={styles.cardFooter}>Very good library</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText :{
        fontSize: 22,
        fontWeight:"bold",
        paddingHorizontal: 10,
      },
      card:{
        width: 380,
        height: 360,
        borderRadius:8,
        marginVertical: 14,
        marginHorizontal:18,
        alignSelf: 'center',
      },
      cardElevated:{
        backgroundColor:'white',
        elevation: 3,
        shadowOffset:{
          width: 1,
          height: 1,
        }
      },
      cardImage:{
        height:220,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 4,
      },
      cardBody:{
        flex:1 ,
        flexGrow:1 ,
        paddingHorizontal: 12,
      },
      cardTitle:{
        color:"black",
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
      },
      cardLablel:{
        color:"black",
        fontSize: 16,
        marginBottom: 6,
      },
      cardDescription:{
        color:"grey",
        fontSize: 12,
        marginTop: 6,
        marginBottom:12,
        flexShrink:1,
      },
      cardFooter:{
        color:"black"
      }
})
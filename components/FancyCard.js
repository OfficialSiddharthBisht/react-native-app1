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
        paddingHorizontal: 12,
      },
      card:{
        //
      },
      cardElevated:{
        //
      },
      cardImage:{
        height:160,
      },
      cardBody:{
        //
      },
      cardTitle:{
        //
      },
      cardLablel:{
        //
      },
      cardDescription:{
        //
      },
      cardFooter:{
        //
      }
})
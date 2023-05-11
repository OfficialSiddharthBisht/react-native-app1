import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>and</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>you</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>will </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>see</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>nothing</Text>
        </View>
      </ScrollView>
    </View>
  )
}   

const styles = StyleSheet.create({
    headingText :{
        fontSize: 22,
        fontWeight:"bold",
        paddingHorizontal: 12,
      },
      container:{
        padding:7
      },
      card:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        width:100,
        height:100,
        margin:8,
        borderRadius:5,
    },
    cardElevated:{
          backgroundColor:"grey",
          shadowOffset:{
            width:3,
            height:3
          },
          shadowColor:"black",
      }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style= {styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>Green</Text>
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
  container:{
    flex:1,
    flexDirection: 'row',
    padding:10
  },
  card:{
    flex:1,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
  },
  cardOne:{
    backgroundColor:"red",
  },
  cardTwo:{
    backgroundColor:"blue"
  },
  cardThree: {
    backgroundColor:"green",
  }
})
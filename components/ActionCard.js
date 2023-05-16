import { Linking, StyleSheet, Text, View } from 'react-native'
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

            </Text>
        </View>
      </View>
    </View>
  )
}   

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},   
})
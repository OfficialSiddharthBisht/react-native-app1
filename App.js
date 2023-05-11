import React from "react";
import {SafeAreaView, ScrollView, View, Text,StyleSheet} from 'react-native'
import FlatCard from './components/FlatCard'
function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
export default App;
import React from "react";
import {SafeAreaView, ScrollView, View, Text,StyleSheet} from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCard from "./components/ElevatedCard";
function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard />
          <ElevatedCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
export default App;
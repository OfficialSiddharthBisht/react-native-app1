import React from "react";
import {SafeAreaView, ScrollView, View, Text,StyleSheet} from 'react-native'
import FlatCard from './components/FlatCard'
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCard />
          <ElevatedCard />
          <FancyCard />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
export default App;
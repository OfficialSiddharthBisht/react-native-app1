import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'


export default function ContactList() {
    contacts = [
        {
            uuid:1,
            name: "Siddharth",
            status: "lorem ipsum",
            imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png",
        },
        {
            uuid:2,
            name: "Som",
            status: "lorem ipsum some",
            imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        },
        {
            uuid:3,
            name: "Kamlesh",
            status: "lorem ipsum",
            imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png",
        },
        {
            uuid:4,
            name: "Lokesh",
            status: "lorem ipsum some",
            imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uuid, name, status,imageUrl})=>(
            <View key={uuid} style={styles.userCard}>
                <Image
                    source={{uri:imageUrl}}
                    style= {styles.userImage}
                />
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    container:{},
    userCard:{},
    userImage: {
        height:50,
        width: 50,
        borderRadius:25
    },
    userName:{},
    userStatus:{},
})
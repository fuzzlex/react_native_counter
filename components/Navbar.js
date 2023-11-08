import { View, Text, StyleSheet, Button,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Navbar = () => {
    const [first, setfirst] = useState(0)
    const handleClick = (position) =>{
        (position === "+") ? setfirst(first + 1) : setfirst(first - 1)
    }

    const styles = StyleSheet.create({
        container: {
          backgroundColor: first === 0 ? "white" : first < 0 ? "red" : "blue",
          alignItems:"center",

        },
        containerCo:{
            width:"50vw",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",


        },
        text : {
            padding:50,
            borderRadius: "5%",
            backgroundColor: "black",
            marginBottom: 6,
            color:"white",
            fontWeight:"bold",
            textAlign:"center",
            margin:3, 
            alignSelf:"flex-start",
        },
      });
  return (
    <View style={styles.container}>
         <View style={styles.containerCo} >
            <Text >{first}</Text>
            <TouchableOpacity key="3" style={styles.text}   onPress={() => handleClick("+")}>Artı</TouchableOpacity>
            <TouchableOpacity key="3" style={styles.text}  onPress={() => handleClick("-")}>Eksi</TouchableOpacity>
         </View>
    </View>
  )
}


  
export default Navbar
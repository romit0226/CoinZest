import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Index from "./Index";

function SplashScreen(props) {
  return (
    <View style={styles.rect}>
      <StatusBar hidden />
      <View style={styles.textColumn}>
        <Text style={styles.text}>
          See what&#39;s happening in the world of Crptyo right now.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Index")}
          style={styles.button}
        >
          <Text style={styles.text2}>Dashboard</Text>
        </TouchableOpacity>
        <Icon name="bitcoin" style={styles.icon}></Icon>
      </View>
      <View style={styles.textColumnFiller}></View>
      <View style={styles.rect2}>
        <Text style={styles.text3}> 🇮🇳 Proudly Made in India {"\n"}
          
            by Romit
         </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    color: "black",
    fontSize: 36,
    lineHeight: 50,
    textAlign: "left",
    marginTop: 200,
    marginLeft: 3,
    marginRight: 2,
    fontFamily:'sans-serif-medium'
  },
  button: {
    height: 80,
    backgroundColor: "#313333",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 100,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  icon: {
    color: "rgba(29,161,242,1)",
    fontSize: 70,
    marginTop: -554,
    marginLeft: 150
  },
  textColumn: {
    marginTop: 33,
    marginLeft: 31,
    marginRight: 31
  },
  textColumnFiller: {
    flex: 1
  },
  rect2: {
    height: 39,
    marginBottom: 45,
    marginLeft: 28,
    marginRight: 28
  },
  text3: {
    color: "black",
    fontSize: 12,
    
    textAlign:"center"
  }
});

export default SplashScreen;

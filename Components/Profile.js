import React from 'react'
import { View, Text, StyleSheet,Image,Linking,Platform,Alert,Button} from 'react-native'
import { Card,FAB } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";









 const  Profile =(props) => {
     
    const {id,total_supply,high_24h,low_24h,
        market_cap,current_price,image,name,symbol,price_change_percentage_24h,
        market_cap_rank,circulating_supply,total_volume} = props.route.params.item
   
           


    return (
       <View style={{flex:1,backgroundColor: "white"}}>
           <Button
        title="Back to Dashboard "
        color="#2196F3"
       style={{marginTop:20}}
        onPress={() => props.navigation.navigate("Index")}
      />
      <Text style={{textAlign:"center",marginTop:10,fontFamily:"sans-serif-medium",fontSize:40}}>{name}</Text>
      <View style={{flexDirection:"row",marginTop:16}}>
      
      
      <View style={styles.ContainerImageProfile}>
    <Image style={styles.ImageProfile} source={{uri: image}} />
</View>
            <View style={{flexDirection:"column",marginLeft:13}}>
             <Text style={{marginTop:10,marginLeft:5,fontSize:15,}}>Current {symbol.toUpperCase()} Buy Price</Text>
               <View style={{flexDirection:"row"}}>
              <Text style={{marginLeft:5,fontSize:24,fontFamily:"sans-serif",fontWeight:"bold"}}>₹{current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  |  </Text>
              {price_change_percentage_24h < 0 ? (
            <Text style={{color:"red",fontSize:18,fontFamily:"sans-serif",fontWeight:"bold",marginTop:4}}> 
             <Icon style={{color:"red",fontSize:18,fontFamily:"sans-serif",fontWeight:"bold"}} name="arrow-down" ></Icon> {price_change_percentage_24h.toFixed(2)}%</Text>
            
          ) : (
            <Text style={{color:"green",fontSize:18,fontFamily:"sans-serif",fontWeight:"bold",marginTop:4}}>
              <Icon name="arrow-up" ></Icon> {price_change_percentage_24h.toFixed(2)}%</Text>
          )}
             
              </View>
              <View style={{flexDirection:"row",marginTop:5}}> 
              <Text> Max24h:₹{high_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} | </Text>
              <Text> Min24h:₹{low_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>

              </View>
             </View>
             
      </View>
      <View style={{marginTop:40,padding:6}}>
       <Card style={{borderRadius:8,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 2,
       },
       shadowOpacity: 3.25,
       shadowRadius: 4,
       margin:2,
       elevation: 3,
          
    }}>
           <Text style={{fontSize:25,fontFamily:"sans-serif-medium",marginLeft:10,marginTop:10,}}>About {symbol.toUpperCase()}  </Text>
           
        <Text style={{fontSize:20,marginLeft:10,marginTop:20,color:"#5f6361",flexDirection:"row"}}>
        <Icon name="chart-bar" style={{fontSize:30}} ></Icon> Market Rank
        
          </Text>
          <Text style={{fontSize:20,textAlign:"right",marginRight:4,marginTop:-25,color:"black"}}>#{market_cap_rank}</Text>
          <Text style={{borderBottomColor: 'black',
    borderBottomWidth: .8,}}></Text>
          <Text style={{fontSize:20,marginLeft:10,marginTop:20,color:"#444745",flexDirection:"row"}}>
        <Icon name="graphql" style={{fontSize:30}} ></Icon> Market Cap
        
          </Text>
          <Text style={{fontSize:20,textAlign:"right",marginRight:4,marginTop:-25,color:"black"}}>₹{market_cap.toString().substring(0,7).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Cr.</Text>
          <Text style={{borderBottomColor: 'black',
    borderBottomWidth: .8,}}></Text>
          <Text style={{fontSize:20,marginLeft:10,marginTop:20,color:"#444745",flexDirection:"row"}}>
        <Icon name="electron-framework" style={{fontSize:30}} ></Icon> Circulating Supply
        
          </Text>
          <Text style={{fontSize:20,textAlign:"right",marginRight:4,marginTop:-25,color:"black"}}>{circulating_supply.toString().substring(0,1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Cr. {symbol.toUpperCase()}  </Text>
          <Text style={{borderBottomColor: 'black',
    borderBottomWidth: .8,}}></Text>
          <Text style={{fontSize:20,marginLeft:10,marginTop:20,color:"#444745",flexDirection:"row"}}>
        <Icon name="resistor" style={{fontSize:30}} ></Icon> Total Volume
        
          </Text>
          <Text style={{fontSize:20,textAlign:"right",marginRight:4,marginTop:-25,color:"black"}}>{total_volume.toString().substring(0,4).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Cr.   </Text>
           <Text style={{marginTop:10}}></Text>
           
            
       </Card>
       </View>
       </View>
    )
}
const theme={
    colors:{
        primary:"#006aff"
    }
}

const styles=StyleSheet.create({
    ContainerImageProfile: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft:4,
        overflow: 'visible',
        shadowOffset: { width: 10, height: 10 },
            shadowColor: '#000',
            shadowOpacity: 100,
            elevation: 10,
            backgroundColor : "#000"

    },
    mycard: {
   
        backgroundColor: "white",
        
        borderRadius:40,
        margin:2,
        shadowColor: "#000",
     shadowOffset: {
         width: 0,
         height: 2,
     },
     shadowOpacity: 1.25,
     shadowRadius: 3.84,
     
     elevation: 3,
        
       },
    ImageProfile: {
        width: '100%',
        height: '100%'
    },
    root:{
        flex:1,
    },
    mycard:{
        margin:3
    },
    cardcontent:{
            flexDirection: "row",
            padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})







export default Profile
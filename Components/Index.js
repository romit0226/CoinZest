import React, {useEffect,useState} from "react";
import { View, Text,StyleSheet,Image,FlatList ,ActivityIndicator,Alert,TouchableOpacity,Dimensions } from "react-native";
import { Button, Card,FAB } from 'react-native-paper'
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
//import HeaderR from'./HeaderR';





 const Index=(props)=> {
 
  const [data,setData]=useState([])
  const [Loading,setLoading]=useState(true)
  const fetchData=()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false")
    .then(res=>res.json())
    .then(results=>{
       setData(results)
       setLoading(false)
       
    }).catch(err=>{
      Alert.alert("Error 404")
    })
   }
   useEffect(()=>{  
      fetchData()
   },[])
   const win = Dimensions.get('window');
   
   const renderList=((item)=>{
    return(
     
       
       
        <Card style={styles.mycard} key={item.id}
        mode="outlined" 
        onPress={() => props.navigation.navigate("Profile",{item})}

        >
          
          
        <View style={styles.cardview}>
        <Image style={{width:40,height:40,borderRadius:20,marginTop:10}}
             source={{ uri:item.image
             }}
         />
     <View style={{...styles.cardview,marginLeft:10,flexDirection:"row"}}>
        <Text style={{...styles.text,color:"black",fontSize:22,fontFamily: 'sans-serif-medium'}}>{item.name}</Text>
        <Text style={{...styles.text,marginLeft:5,fontSize:16,marginTop:6,color:"#55706e",fontFamily: 'sans-serif-light'}}>{item.symbol.toUpperCase()}</Text>
         
        
     </View>
    
     
        </View>
        <View style={{...styles.cardview,marginLeft:60,marginTop:-20}}>
        <Text style={{color:"#55706e"}}>₹{item.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} |</Text>
        
        {item.price_change_percentage_24h < 0 ? (
            <Text style={{color:"red"}}> 
             <Icon name="arrow-down" ></Icon> {item.price_change_percentage_24h.toFixed(2)}%</Text>
            
          ) : (
            <Text style={{color:"green"}}>
              <Icon name="arrow-up" ></Icon> {item.price_change_percentage_24h.toFixed(2)}%</Text>
          )}
       
          </View>
        
    
    </Card>
    
 
    )
})

  return (
    <View style={{flex:1,backgroundColor: "white"}}>
        <Header
        
  placement="center"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'CoinZest', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

        <Image
          style={{width:win.width,alignSelf: "center",height:win.width/2,borderBottomLeftRadius:30,borderBottomRightRadius:30,marginTop:-1}}
          source={require('./Untitled.png')}
         />
        {/* <HeaderR /> */}
    <FlatList style={{padding:3}}
    data={data}
    renderItem={({item})=>{
          return renderList(item )
    }}
    keyExtractor={item=>item.id}   
     />


 
</View>
  )
}
const styles = StyleSheet.create({
  mycard: {
   
   backgroundColor: "white",
   
   borderRadius:15,
   margin:1.5,
   shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 3,
   
  },
  cardview:{
      flexDirection:'row',
      padding:8,
  },
  text:{
      fontSize:20,   
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
    padding:3
  },
  button: {
    height: 90,
    backgroundColor: "#313333",
    borderRadius: 140,
    justifyContent: "center",
    marginTop: 10,
    padding:3,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  },
  
  
});


export default Index;

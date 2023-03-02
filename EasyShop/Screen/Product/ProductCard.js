import { View, Text, Dimensions, Image, Button, StyleSheet } from 'react-native'
import React from 'react'

var {width} = Dimensions.get("window");
const ProductCard = (props) => {

    const {name, price, image, countInStock} = props;

    console.log(props.name)

    return (
        <View style={StyleSheet.container}>
            <Image style= {styles.image}/>
                <View style = {styles.card} />
                <Text style = {styles.title}  >

                    {name?.length > 15 ? name.substring(0, 15 -3 )
                    + '...' : name
                    
                } 
                   
                    
                </Text>
                <Text style={styles.price}>${props.price}</Text>
            
        </View>



    )

}

const styles = StyleSheet.create({
    container: {
      width: width/2 -20,
      height: width/1.7,
      padding: 10,
      borderRadius:10,
      marginTop:55,
      marginBottom:5,
      marginLeft:10,
      alighItem:'center',
      elevation:8,
      backgroundColor:'#9df9ef'

    },
    image:{
        width: width / 2 - 20 - 10,
        height: width/ 2 - 20 - 30,
        backgroundColor : 'transparent',
        position:"absolute",
        top: -45,

    },
    card:{
        marginBottom:10,
        height: width/ 2 - 20 -90,
        backgroundColor : 'transparent',
        width: width/ 2 - 20 -10
    },
    font:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center'

    },
    price:{
        fontSize:20,
        color:'orange',
        marginTop:10
     }

});


export default ProductCard
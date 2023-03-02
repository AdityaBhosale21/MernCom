import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard';

var {width} = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  console.log(item)

    
  return (
   
    <TouchableOpacity style={{width:'50%'}}>

        <View style={{width : width/2 , backgroundColor: '#d0bdf4'}}>
          <ProductCard  {...item}/>

        </View>

    </TouchableOpacity>
  )
}

export default ProductList
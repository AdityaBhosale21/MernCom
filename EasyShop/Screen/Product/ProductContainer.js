import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ProductList from './ProductList';


const data = require('../../assets/products.json');

const ProductContainer = () => {

  const[products,setProducts]= useState([])
  useEffect(() =>{

    setProducts(data);


    return () => {

      setProducts([])
    }
  },[])
  return (
    <View>
      <Text>Product Container</Text>
      <View style={{marginTop:100}}>
      <FlatList
      horizontal
      data={products}
      renderItem= {({item,id})=><ProductList 
      key={item.id}
      item={item}/>}
      keyExtractor={item =>item.name}
      
      />
      </View>
      
    </View>
  )
}

export default ProductContainer
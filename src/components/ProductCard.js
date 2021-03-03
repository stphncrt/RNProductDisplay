import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <Text>{product.title}</Text>
        <Text style={{fontWeight: 'bold'}}>{product.price}</Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: product.inStock ? 'black' : 'red',
          }}>
          {product.inStock ? 'In stock' : 'Not available'}
        </Text>
      </View>
    </View>
  );
};

export {ProductCard};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderLeftWidth: 5,
    borderLeftColor: 'green',
  },
});

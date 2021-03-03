import React from 'react';
import {View, Text, FlatList} from 'react-native';
import productData from './products.json';
import {ProductCard} from './components/ProductCard';

const Stok = () => {
  const renderListItem = ({item}) => <ProductCard product={item} />;

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={productData}
        renderItem={renderListItem}
        numColumns={2}
      />
    </View>
  );
};

export default Stok;

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Alert, TextInput} from 'react-native';
import productData from './products.json';
import {ProductCard} from './components/ProductCard';

const Stok = () => {
  const [searchValue, setSearchValue] = useState('');
  const renderListItem = ({item}) => <ProductCard product={item} />;

  // useEffect(() => {
  //   Alert.alert('Clarushop', 'Wellcome, Enjoy your shopping..');
  // }, []);
  return (
    <View>
      <Text style={styles.banner}>ClaruShop</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder={'Search your product...'}
          onChangeText={(value) => setSearchValue(value)}
        />
      </View>
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

const styles = StyleSheet.create({
  banner: {
    textAlign: 'center',
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 40,
  },
  searchBar: {
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
});

// HomeScreen.tsx
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Appbar, Button, Card} from 'react-native-paper';
import styles from './HomeStyle';

const categories = [
  {id: '1', name: 'Electronics'},
  {id: '2', name: 'Fashion'},
  {id: '3', name: 'Home Appliances'},
  {id: '4', name: 'Books'},
];

const products = [
  {
    id: '1',
    name: 'Smartphone',
    price: '$699',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Laptop',
    price: '$999',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    name: 'Headphones',
    price: '$199',
    image: 'https://via.placeholder.com/150',
  },
];

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const handleCart = () => {};

  const renderProduct = ({
    item,
  }: {
    item: {id: string; name: string; price: string; image: string};
  }) => (
    <Card style={styles.card}>
      <Card.Cover source={{uri: item.image}} />
      <Card.Content>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleCart}>Add to Cart</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Appbar.Action icon="cart" />
        </TouchableOpacity>
      </Appbar.Header>

      <Text style={styles.title}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ProductCard from './ProductCard';
import styles from './Category.styles'; // Import the stylesheet

interface CategoryProps {
  title: string;
  products: {
    id: string;
    name: string;
    price: string;
    rating: number;
    isAvailable: boolean;
    image: string;
  }[];
}

const Category: React.FC<CategoryProps> = ({title, products}) => {
  const renderItem = ({item}: {item: any}) => (
    <ProductCard
      image={item.image}
      name={item.name}
      price={item.price}
      rating={item.rating}
      isAvailable={item.isAvailable}
      onAddToCart={() => console.log(`Added ${item.name} to cart`)}
    />
  );

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} // Two columns for a grid layout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

export default Category;

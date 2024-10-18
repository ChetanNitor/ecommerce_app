import React from 'react';
import {ScrollView, View} from 'react-native';
import Category from '../components/Category';
import styles from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
  const categories = [
    {
      title: 'Electronics',
      products: [
        {
          id: '1',
          name: 'Smartphone',
          price: '$299',
          rating: 4.5,
          isAvailable: true,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '2',
          name: 'Laptop',
          price: '$899',
          rating: 4.0,
          isAvailable: true,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '3',
          name: 'Smartwatch',
          price: '$199',
          rating: 4.2,
          isAvailable: false,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
    {
      title: 'Home Appliances',
      products: [
        {
          id: '4',
          name: 'Vacuum Cleaner',
          price: '$150',
          rating: 4.7,
          isAvailable: true,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '5',
          name: 'Refrigerator',
          price: '$499',
          rating: 4.2,
          isAvailable: true,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: '6',
          name: 'Air Conditioner',
          price: '$799',
          rating: 4.5,
          isAvailable: false,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {categories.map(category => (
          <Category
            key={category.title}
            title={category.title}
            products={category.products}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

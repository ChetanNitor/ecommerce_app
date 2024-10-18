import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text, Button} from '@rneui/themed';
import styles from './ProductCard.styles'; // Import the stylesheet

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
  isAvailable: boolean;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  rating,
  isAvailable,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onAddToCart}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text h4 style={styles.name}>
          {name}
        </Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
        <Text style={styles.availability}>
          {isAvailable ? 'In Stock' : 'Out of Stock'}
        </Text>
        {isAvailable && (
          <Button
            title="Add to Cart"
            buttonStyle={styles.addButton}
            onPress={onAddToCart}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

// HomeStyles.ts
import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    height: 35,
  },
  card: {
    flex: 1,
    margin: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productRow: {
    justifyContent: 'space-between',
  },
});

export default homeStyles;

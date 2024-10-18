import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    margin: 10,
    overflow: 'hidden',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 150,
  },
  details: {
    padding: 10,
  },
  name: {
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  rating: {
    color: '#FFD700',
  },
  availability: {
    color: 'green',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#3b82f6',
  },
});

export default styles;

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CarouselComponent = () => {
  const images = [
    { source: require('./img/aya.jpg') },
    { source: require('./img/indir.jpg') },
    { source: require('./img/urgup.jpg') },
    // Diğer resimler
  ];

  return (
    <Carousel
      data={images}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.source} style={styles.image} />
        </View>
      )}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CarouselComponent;

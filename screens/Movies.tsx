import React from 'react';
import {Text} from 'react-native';

interface MoviesProps {}

const Movies: React.FC<MoviesProps> = () => {
  return (
    <>
      <Text style={{color: '#fefefe'}}> Movies </Text>
    </>
  );
};

export default Movies;

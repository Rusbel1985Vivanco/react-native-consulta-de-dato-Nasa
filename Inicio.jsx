import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=EIEDfiyaj5qc0WHHDMc2b76gBgedpK85N7Erxs1v`)
      .then(response => {
        setApodData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      {apodData && (
        <>
          <Text>{apodData.title}</Text>
          <Text>{apodData.date}</Text>
          <Text>{apodData.explanation}</Text>
        </>
      )}
    </View>
  );
};

export default HomeScreen;


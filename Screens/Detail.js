import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

import { getSpecificMovie } from "../Services/movieServices";

//allows me to have access to the device size
const dimension = Dimensions.get("screen");

const Detail = ({ route }) => {
  //----The movie id gotten from the Card clicked by the user----//
  const movieId = route.params.MovieDetail.id;
  const [detail, setDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  //This calls the service and saves the data to a state value
  useEffect(() => {
    getSpecificMovie(movieId)
      .then((resp) => {
        setDetail(resp);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + detail.poster_path,
            }}
          />
        </ScrollView>
      )}
    </React.Fragment>
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: dimension.height / 2,
    resizeMode: "cover",
  },
});

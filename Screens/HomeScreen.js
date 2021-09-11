import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { getPopularMovies, getUpComingMovies } from "../Services/movieServices";

const HomeScreen = () => {
  const [movie, setMovie] = useState("");
  const [erro, setErro] = useState(false);

  const [upComing, setUpComing] = useState(""); //state value and handler definition

  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        setMovie(movies[0]);
      })
      .catch((err) => {
        setErro(err);
      });

    //get upcoming movies
    getUpComingMovies()
      .then((param) => {
        setUpComing(param);
      })
      .catch((err) => {
        setErro(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      {erro ? (
        <Text style={styles.error}>Error in Server</Text>
      ) : (
        <>
          <FlatList
            data={upComing}
            renderItem={({ item }) => (
              <Image
                style={styles.image}
                source={{
                  uri: "https://image.tmdb.org/t/p/w500/hRMfgGFRAZIlvwVWy8DYJdLTpvN.jpg",
                }}
              />
            )}
            horizontal
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
  },
  image: {
    width: "50",
    height: "50",
    resizeMode: "cover",
    margin: 5,
  },
});

export default HomeScreen;

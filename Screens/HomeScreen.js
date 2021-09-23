import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import {
  getPopularMovies,
  getUpComingMovies,
  getPopularTv,
  getFamilyTv,
  getDocumentaryTv,
} from "../Services/movieServices";

import { CarouselList } from "../components/ImageCarouselList";

//getting dimension of the screen
const dimension = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [popularMovie, setPopularMovie] = useState("");

  const [erro, setErro] = useState(false);

  const [upComing, setUpComing] = useState(""); //state value and handler definition

  const [popularTv, setPopularTv] = useState(""); //state value and handler deefinition

  const [familyTv, setFamilyTv] = useState(""); //state value and handler definition

  const [docTv, setDocTv] = useState(""); //state value and handler definition

  //-------------combining all the promises together for Clean code -------------//
  const getData = () => {
    return Promise.all([
      getPopularMovies(),
      getUpComingMovies(),
      getPopularTv(),
      getFamilyTv(),
      getDocumentaryTv(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(([popMovData, upComMovData, popTvData, famTvData, docMovData]) => {
        setPopularMovie(popMovData);
        setUpComing(upComMovData);
        setPopularTv(popTvData);
        setFamilyTv(famTvData);
        setDocTv(docMovData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={upComing}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Image
                style={styles.image}
                source={{
                  uri: "https://image.tmdb.org/t/p/w500" + item.poster_path,
                }}
              />
            )}
            horizontal
          />
        </View>

        {/*Popular movie carousel component */}
        <View>
          <CarouselList
            navigation={navigation}
            title="Popular movies"
            content={popularMovie}
          />
        </View>

        {/*Popular tv carousel component */}
        <View>
          <CarouselList
            nnavigation={navigation}
            title="Popular Tv"
            content={popularTv}
          />
        </View>

        {/*Family tv carousel component */}
        <View>
          <CarouselList
            navigation={navigation}
            title="Family Tv"
            content={familyTv}
          />
        </View>

        {/*Documentaries tv carousel component */}
        <View>
          <CarouselList
            navigation={navigation}
            title="Documentaries"
            content={docTv}
          />
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 350,
    height: dimension.height / 1.3,
    resizeMode: "cover",
  },
});

export default HomeScreen;

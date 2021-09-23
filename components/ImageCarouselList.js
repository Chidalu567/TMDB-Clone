import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Card } from "../components/Cards";
import PropTypes from "prop-types";

//This component is expected to return a Carousel list of image for popular movies
export const CarouselList = ({ navigation, title, content }) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <Card navigation={navigation} item={item} />
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
}; //react native component definition

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    fontFamily: "sans-serif",
    marginBottom: 10,
  },
  titleContainer: {},
});

//-------Define the type checker------//
const CarouselList_type_check = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

//-------Assign type checker to component -------//
CarouselList.propTypes = CarouselList_type_check;

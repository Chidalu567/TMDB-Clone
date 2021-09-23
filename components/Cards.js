import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

export const Card = ({ navigation, item }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
        />
      </TouchableOpacity>
    </View>
  );
}; //React native component

//create styled components
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    margin: 3,
    borderRadius: 25,
  },
});

//-------------------component property checking-----------//
const Card_Prop_Type_Chk = {
  item: PropTypes.object.isRequired,
};

//-----------Assign the Type checking to the component-------//
Card.propTypes = Card_Prop_Type_Chk;

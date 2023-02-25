import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../../StyledButton";
const CarItem = (props) => {
  const { name, tagline, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.images} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline} </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.log("custom order was pressed");
          }}
        />
        <StyledButton
          type="primary"
          content={"Existing Inventory"}
          onPress={() => {
            console.log("existing inventory  was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

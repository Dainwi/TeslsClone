import { View, Text, Pressable } from "react-native";
import React from "react";
import styleing from "./styleing";
const StyledButton = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  const { type, content, onPress } = props;
  const background = type === "primary" ? "#171A28CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFFA6" : "#171A28CC";
  return (
    <View style={[styleing.container]}>
      <Pressable style={[styleing.button]} onPress={() => onPress()}>
        <Text style={[styleing.text]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

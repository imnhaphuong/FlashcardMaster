import { View } from "react-native";

import React, { useState } from "react";

const Line = (props) => {
  const height = props.height ? props.height : 1;
  const bg = props.backgroundColor ? props.backgroundColor : "black";
  const opacity = props.opacity ? props.opacity : '1'

  return (
    <View style={{ height: height, width: "100%", backgroundColor: bg, opacity: opacity}}></View>
  );
};

export default Line;

import React from "react";
import { ViewProps } from "react-native";
import { View } from "./Themed";

interface Props extends ViewProps {
  children?: React.ReactNode;
  backgroundColor?: string;

  borderRadius?: number;
}

const Section: React.FC<Props> = ({
  backgroundColor,
  borderRadius = 10,
  children,
  style,
  ...otherProps
}) => {
  return (
    <View
      {...otherProps}
      style={[
        style,
        {
          flexDirection: "column",
          borderRadius: borderRadius,
          overflow: "hidden",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Section;
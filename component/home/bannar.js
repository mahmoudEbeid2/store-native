import { View, Text, ImageBackground } from "react-native";
export function Banner() {
  return (
    <View
      style={{
        width: "90%",
        height: 210,
        alignSelf: "center",
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        style={{ flex: 1, borderRadius: 30 }}
        source={require("../../assets/banar.png")}
        resizeMode="cover"
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            padding: 20,
            fontWeight: "bold",
            lineHeight: 30 * 1.41,
          }}
        >
          Autumn{"\n"}
          Collection{"\n"}
          2022
        </Text>
      </ImageBackground>
    </View>
  );
}

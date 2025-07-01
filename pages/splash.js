import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/splash";

export default function Splash({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Georama-Bold": require("../assets/fonts/Georama_Condensed-Bold.ttf"),
    "Georama-Regular": require("../assets/fonts/Georama_Condensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../assets/splash-bg.jpg")}
      resizeMode="cover"
      style={styles.backGround}
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.headline}>Welcome to GemStore! </Text>
        <Text style={styles.subHeadline}> The Home For A Fashionista </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

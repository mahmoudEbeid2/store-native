import { View, Text, Image, TouchableOpacity } from "react-native";

export function Card({
  title,
  price,
  image,
  width,
  height,
  imageHighlight,
  navigation,
  description,
}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProudactDetils", {
          title: title,
          price: price,
          image: image,

          description: description,
        })
      }
    >
      <View
        style={{
          height: height,
          width: width,
          borderRadius: 20,
          marginRight: 12,
        }}
      >
        <View
          style={{
            width: "100%",
            height: imageHighlight,
            backgroundColor: "#F4F2F0",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: image }}
          />
        </View>

        <View style={{ paddingTop: 10 }}>
          <Text
            style={{ fontSize: 12, color: "#333", marginBottom: 5 }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

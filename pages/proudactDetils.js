import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CartIcon from "../assets/cart.svg";

export function ProudactDetils({ navigation, route }) {
  const { title, price, image, description } = route.params;
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            backgroundColor: "white",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            elevation: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 1,
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <View
          style={{
            width: "90%",
            height: 400,
            backgroundColor: "#F4F2F0",
            alignSelf: "center",
            overflow: "hidden",
            padding: 10,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
            source={{ uri: image }}
          />
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              paddingVertical: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {title.split(" ").slice(0, 3).join(" ")}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>${price}</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontSize: 18, color: "grey" }}>Color</Text>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: "#E7C0A7",
                borderColor: "white",
                borderWidth: 5,
                marginRight: 8,
              }}
            ></View>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: "black",
                marginRight: 8,
              }}
            ></View>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: "#EE6969",
              }}
            ></View>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginHorizontal: 20,
              paddingBottom: 10,
              fontSize: 18,
              borderBottomColor: "grey",
              borderBottomWidth: 1,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 15,
              paddingTop: 10,
              color: "grey",
            }}
          >
            {description}
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            height: 100,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            gap: 10,
          }}
        >
          <CartIcon />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Add To Cart
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

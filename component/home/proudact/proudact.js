import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LessProudact } from "./lessProudact";
import { AllProudacts } from "./allProudacts";
export function Proudact({ navigation }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <View
        style={{
          padding: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Feature Products
          </Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text style={{ fontSize: 14, color: "#9D9D9D" }}>
              {showAll ? "Show Less" : "Show All"}
            </Text>
          </TouchableOpacity>
        </View>
        {showAll ? (
          <AllProudacts navigation={navigation} />
        ) : (
          <LessProudact navigation={navigation} />
        )}
      </View>
    </>
  );
}

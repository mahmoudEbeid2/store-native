import { View, Text, TouchableOpacity } from "react-native";

export function Icon({ children, isActive, title }) {
  return (
    <>
      {isActive ? (
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View>
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: "white",
                borderRadius: 50,
                borderColor: "#3A2C27",
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45,
                  height: 45,
                  backgroundColor: "#3A2C27",
                  borderRadius: 50,
                }}
              >
                {children}
              </View>
            </View>
          </View>
          <Text>
            <Text style={{ fontWeight: "gray", fontSize: 12 }}>{title}</Text>
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ alignItems: "center" }}>
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 45,
                height: 45,
                backgroundColor: "#F3F3F3",
                borderRadius: 50,
              }}
            >
              {children}
            </View>
          </View>
          <Text>
            <Text style={{ fontWeight: "#F3F3F3", fontSize: 12 }}>{title}</Text>
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

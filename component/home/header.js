import MenuIcon from "../../assets/menu.svg";
import BellIcon from "../../assets/Bell_pin.svg";
import { View, Text, TouchableOpacity } from "react-native";

export function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
      }}
    >
      <TouchableOpacity>
        <MenuIcon />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Gemstore</Text>
      <TouchableOpacity>
        <BellIcon />
      </TouchableOpacity>
    </View>
  );
}

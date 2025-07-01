import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon } from "./icon";
import { View } from "react-native";
import ManIcon from "../../../assets/man.svg";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Beauty from "../../../assets/Beauty.svg";
export function Category() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginBottom: 20,
      }}
    >
      <Icon isActive={true} title="Women">
        <Ionicons name="female-outline" size={24} color="white" />
      </Icon>
      <Icon isActive={false} title="Men">
        <ManIcon width={24} height={24} />
      </Icon>
      <Icon isActive={false} title="Accessories">
        <FontAwesome5 name="glasses" size={24} color="#9D9D9D" />
      </Icon>
      <Icon isActive={false} title="Beauty">
        <Beauty width={24} height={24} />
      </Icon>
    </View>
  );
}

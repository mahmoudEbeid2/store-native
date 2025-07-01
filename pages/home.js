import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Header } from "../component/home/header";
import { Banner } from "../component/home/bannar";
import { Category } from "../component/home/category/category";
import { Proudact } from "../component/home/proudact/proudact";

export function Home({ navigation }) {
  return (
    <View>
      <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
      ></StatusBar>

      <FlatList
        ListHeaderComponent={
          <View>
            <Header />
            <Category />
            <Banner />
            <Proudact navigation={navigation} />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

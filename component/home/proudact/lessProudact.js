import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Card } from "./card";

export function LessProudact({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=5&skip=0"
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            title={item.title}
            price={item.price}
            image={item.thumbnail}
            description={item.description}
            width={126}
            height={227}
            imageHighlight={140}
          />
        )}
      />
    </View>
  );
}

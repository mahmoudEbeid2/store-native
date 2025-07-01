import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import { Card } from "./card";

export function AllProudacts({ navigation }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      if (isLoading) return;
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=5&skip=${page}`
        );
        const data = await res.json();
        setTotalProducts(data.total);

        setProducts((prev) => [...prev, ...data.products]);
      } catch (error) {
        console.log("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [page]);

  const loadMoreProducts = () => {
    if (!isLoading && products.length < totalProducts) {
      setPage((prev) => prev + 5);
    }
  };

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      );
    }

    if (products.length >= totalProducts) {
      return <Text style={styles.endText}>No More Products</Text>;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        ListFooterComponent={renderFooter()}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            description={item.description}
            title={item.title}
            price={item.price}
            image={item.thumbnail}
            width={140}
            height={254}
            imageHighlight={150}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  footer: {
    paddingVertical: 20,
  },
  endText: {
    textAlign: "center",
    fontSize: 16,
    color: "#9D9D9D",
    fontWeight: "bold",
    marginVertical: 20,
  },
});

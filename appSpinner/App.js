import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(
        (result) => {
        setIsLoading(false);
        setResponse(result);
      },
      (error) => {
        setIsLoading(false);
        setError(error);
      }
    )
  }, []);

  const getContent = () => {
    if(isLoading){
      return <ActivityIndicator size="large" />;
    }

    if(error){
      return <Text>{error}</Text>
    }
    console.log(response);
    return <Text>API CALLED</Text>

  };

  return (
    <View style={styles.container}>
      {getContent()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

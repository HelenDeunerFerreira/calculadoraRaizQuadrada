import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [number, setNumber] = useState(" ");
  const [resultado, setResultado] = useState(" ");

  const calculaRaiz = () => {
    let numero = parseInt(number)

    if (numero != String) {
      setResultado(Math.sqrt(numero))
    } else {
      setResultado("Número inválido")
    }
  }

  return (
    <View style={styles.container}>
      <Text>Digite o número para obter sua raiz quadrada</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={" "}
        onChangeText={(number) => setNumber(number)}
        defaultValue={number}
      />

      <Button
        onPress={() => calculaRaiz()}
        title="Calcular"
        color="#841030"
      />

      <Text style={styles.resultado}>Resultado: {resultado}</Text>

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
  input: {
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderRadius: 15,
    borderWidth: 2,
    margin: 15,
    padding: 10,
  },
  resultado: {
    fontSize: 20,
    margin: 15
  }
});

import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
  let estilo =
    style?.fontWeight === "bold" ? estilos.textoNegrito : estilos.texto;
  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});

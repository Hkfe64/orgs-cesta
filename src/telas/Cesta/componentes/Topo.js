import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import topo from "../../../../assets/topo.png";
import Texto from "../../../componentes/Texto";

const width = Dimensions.get("screen").width;

export default function Topo() {
  return (
    <>
      <Image style={estilos.topo} source={topo} />
      <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});

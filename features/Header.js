import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  View,
  Text
} from "react-native";

const Header = props => {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableHighlight
        style={styles.btAdicionar}
        onPress={() => {
          props.dispatch({
            type: "adicionarModal/show"
          });
        }}
      >
        <View style={styles.viewBotaoAdicionar}>
          <Text style={styles.txtBotao}>Adicionar</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btAdicionar: {
    borderColor: "white",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 32,
    borderRadius: 10
  },
  viewBotaoAdicionar: {
    height: 34,
    borderRadius: 10,
    backgroundColor: "#005E72",
    justifyContent: "center"
  },
  txtBotao: {
    fontFamily: "notoserif",
    fontWeight: "bold",
    color: "white",
    margin: "auto",
    textAlign: "center"
  }
});

export default connect()(Header);

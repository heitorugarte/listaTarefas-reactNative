import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import ListaTarefas from "./features/ListaTarefas";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./tarefasReducer";
import Header from "./features/Header";
import AddTarefaModal from "./features/AddTarefaModal";
import DetalhesTarefaModal from "./features/DetalhesTarefaModal";
import EditarTarefaModal from "./features/EditarTarefaModal";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.tituloApp}>Tarefas Bizuradas!</Text>
        <Header />
        <AddTarefaModal />
        <DetalhesTarefaModal />
        <EditarTarefaModal />
        <ListaTarefas />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 25 || 0,
    width: "auto",
    flex: 1,
    backgroundColor: "#46B54F",
    justifyContent: "center"
  },
  tituloApp: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontFamily: "notoserif",
    textDecorationLine: "underline",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
});

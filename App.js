import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ListaTarefas from "./features/ListaTarefas";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./tarefasReducer";
import Header from "./features/Header";
import AddTarefaModal from "./features/AddTarefaModal";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <AddTarefaModal />
        <ListaTarefas />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 15 || 0,
    width: "auto",
    flex: 1,
    backgroundColor: "#46B54F",
    justifyContent: "flex-end"
  }
});

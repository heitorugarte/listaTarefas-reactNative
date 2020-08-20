import React from "react";
import { StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import { connect } from "react-redux";

const ListaTarefas = props => {
  const renderItem = ({ item }) => <Item item={item} />;
  console.log("LISTA TAREFAS PROP:");
  console.log(props.listaTarefas);
  return (
    <View style={styles.viewLista}>
      <FlatList data={props.listaTarefas} renderItem={renderItem} />
    </View>
  );
};

const mapTarefaProps = state => {
  return {
    listaTarefas: state.listaTarefas
  };
};

export default connect(mapTarefaProps)(ListaTarefas);

const Item = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.header}>ID</Text>
        <Text style={styles.item}>{item.id.toString()}</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={styles.header}>Descrição</Text>
        <Text style={styles.item}>{item.descricao}</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={styles.header}>Situação</Text>
        <Text style={styles.item}>{item.situacao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLista: {
    width: "100%",
    height: "96%",
    backgroundColor: "#46B54F"
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "#00A26D",
    flexDirection: "row",
    borderWidth: 1,
    margin: 2,
    justifyContent: "space-between"
  },
  header: {
    textAlign: "center",
    color: "yellow"
  },
  item: {
    textAlign: "center",
    margin: "auto"
  }
});

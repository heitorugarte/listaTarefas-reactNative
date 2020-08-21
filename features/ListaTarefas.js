import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

const ListaTarefas = props => {
  const renderItem = ({ item }) => (
    <TarefaConnected key={(item.descricao, item.situacao)} tarefa={item} />
  );
  return (
    <View style={styles.viewLista}>
      <FlatList
        keyExtractor={() => Math.random().toString()}
        data={props.listaTarefas}
        renderItem={renderItem}
      />
    </View>
  );
};

const mapTarefaProps = state => {
  return {
    listaTarefas: state.listaTarefas
  };
};

export default connect(mapTarefaProps)(ListaTarefas);

//-----------------------------------------------------------------------------------//

const Tarefa = props => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        props.dispatch({
          type: "detalhesModal/show",
          tarefa: props.tarefa
        });
      }}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.header}>ID</Text>
        <Text style={styles.item}>{props.tarefa.id.toString()}</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={styles.header}>Descrição</Text>
        <Text style={styles.item}>{props.tarefa.descricao}</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={styles.header}>Situação</Text>
        <Text style={styles.item}>{props.tarefa.situacao}</Text>
      </View>
    </TouchableOpacity>
  );
};

const TarefaConnected = connect()(Tarefa);

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

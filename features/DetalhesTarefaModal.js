import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Modal,
  TextInput,
  Picker,
  Text,
  Alert
} from "react-native";

const DetalhesTarefaModal = props => {
  return (
    <Modal
      animationType="slide"
      visible={props.detalhesTarefaModalVisible}
      style={styles.modal}
      transparent={true}
    >
      <View style={styles.modalCenteredView}>
        <View style={styles.modalView}>
          <View style={styles.modalContentView}>
            <Text style={styles.modalTitle}>Detalhes da Tarefa</Text>
            <View style={styles.viewConteudo}>
              <View style={styles.viewInfo}>
                <Text style={styles.textLabel}>ID:</Text>
                <Text style={styles.textDetail}>{props.tarefa.id}</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textLabel}>Descrição:</Text>
                <Text style={styles.textDetail}>{props.tarefa.descricao}</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.textLabel}>Situação:</Text>
                <Text style={styles.textDetail}>{props.tarefa.situacao}</Text>
              </View>
              <TouchableHighlight
                style={styles.btEditarTarefa}
                onPress={() => {
                  editarTarefa(props.dispatch, props.tarefa);
                  fecharModalDetalhesTarefa(props.dispatch);
                }}
              >
                <View style={styles.viewBotaoEditarTarefa}>
                  <Text style={styles.txtBotaoModal}>Editar</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.btExcluirTarefa}
                onPress={() => {
                  excluirTarefa(props.dispatch, props.tarefa);
                  fecharModalDetalhesTarefa(props.dispatch);
                }}
              >
                <View style={styles.viewBotaoExcluirTarefa}>
                  <Text style={styles.txtBotaoModal}>Excluir</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.btFechar}
                onPress={() => {
                  fecharModalDetalhesTarefa(props.dispatch);
                }}
              >
                <View style={styles.viewBotaoFechar}>
                  <Text style={styles.txtBotaoModal}>Fechar</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const editarTarefa = (dispatch, tarefa) => {
  dispatch({
    type: "editarModal/show",
    tarefa: tarefa
  });
};

const fecharModalDetalhesTarefa = dispatch => {
  dispatch({
    type: "detalhesModal/hide"
  });
};

const excluirTarefa = (dispatch, tarefa) => {
  dispatch({
    type: "tarefas/delete",
    tarefa: tarefa
  });
};

const mapDetalhesTarefaToProps = state => {
  return {
    tarefa: state.tarefa,
    detalhesTarefaModalVisible: state.detalhesTarefaModalVisible
  };
};

export default connect(mapDetalhesTarefaToProps)(DetalhesTarefaModal);

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: "95%",
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
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
  modalContentView: {
    width: "90%"
  },
  modalTitle: {
    fontFamily: "notoserif",
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
    paddingVertical: 15,
    textAlign: "center"
  },
  btFechar: {
    height: 35,
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
  btExcluirTarefa: {
    height: 35,
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
  viewBotaoExcluirTarefa: {
    height: 34,
    borderRadius: 10,
    backgroundColor: "#FF2C00",
    justifyContent: "center"
  },
  viewBotaoFechar: {
    height: 34,
    borderRadius: 10,
    backgroundColor: "#8B8B8B",
    justifyContent: "center"
  },
  btEditarTarefa: {
    height: 35,
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
  viewBotaoEditarTarefa: {
    height: 34,
    borderRadius: 10,
    backgroundColor: "#2BBE03",
    justifyContent: "center"
  },
  txtBotaoModal: {
    fontFamily: "notoserif",
    fontWeight: "bold",
    color: "white",
    margin: "auto",
    textAlign: "center"
  },
  textLabel: {
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  viewInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  }
});

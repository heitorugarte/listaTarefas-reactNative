import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Modal,
  TextInput,
  Picker,
  Text
} from "react-native";

const AddTarefaModal = props => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      style={styles.modal}
      transparent={true}
    >
      <View style={styles.modalCenteredView}>
        <View style={styles.modalView}>
          <View style={styles.modalContentView}>
            <Text style={styles.modalTitle}>
              Insira os dados da nova tarefa:
            </Text>
            <View style={styles.inputTextView}>
              <TextInput
                style={styles.inputText}
                placeholder="Descrição..."
              ></TextInput>
            </View>
            <View style={styles.pickerView}>
              <Text style={styles.modalPickerLabel}>Situação:</Text>
              <Picker
                style={styles.modalPicker}
                selectedValue={props.selectedSituacaoPicker}
                onValueChange={(itemValue, itemIndex) =>
                  props.dispatch({
                    type: "situacaoPicker/select",
                    selected: itemValue
                  })
                }
              >
                <Picker.Item label="A fazer" value="A fazer" />
                <Picker.Item label="Fazendo" value="Fazendo" />
                <Picker.Item label="Concluído" value="Concluído" />
              </Picker>
            </View>
            <TouchableHighlight
              style={styles.btConfirmaAdd}
              onPress={() => {
                let novaTarefa = {
                  id: 15,
                  descricao: "Tarefa Adicionada",
                  situacao: "Concluído"
                };
                props.dispatch({
                  type: "tarefas/add",
                  tarefa: novaTarefa
                });
                fecharModalAddTarefa(props.dispatch);
              }}
            >
              <View style={styles.viewBotaoConfirmaAdd}>
                <Text style={styles.txtBotaoModal}>OK</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.btCancelaAdd}
              onPress={() => {
                fecharModalAddTarefa(props.dispatch);
              }}
            >
              <View style={styles.viewBotaoCancelaAdd}>
                <Text style={styles.txtBotaoModal}>Cancelar</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const mapAddTarefaModalProps = state => {
  return {
    visible: state.visible,
    selectedSituacaoPicker: state.selectedSituacaoPicker
  };
};

export default connect(mapAddTarefaModalProps)(AddTarefaModal);

const fecharModalAddTarefa = dispatch => {
  dispatch({
    type: "modal/hide"
  });
};

const styles = StyleSheet.create({
  btConfirmaAdd: {
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
    elevation: 32
  },
  viewBotaoConfirmaAdd: {
    height: 34,
    borderRadius: 10,
    backgroundColor: "#14912E",
    justifyContent: "center"
  },
  btCancelaAdd: {
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
  viewBotaoCancelaAdd: {
    height: 34,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center"
  },
  txtBotaoModal: {
    fontFamily: "notoserif",
    fontWeight: "bold",
    color: "white",
    margin: "auto",
    textAlign: "center"
  },
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
    justifyContent: "center",
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
    paddingVertical: 15
  },
  inputTextView: {
    paddingVertical: 10
  },
  inputText: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black"
  },
  modalPicker: {
    borderWidth: 1,
    borderColor: "black"
  }
});

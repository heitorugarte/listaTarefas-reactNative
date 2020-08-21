const listaInicial = [];

export default function reducer(
  state = {
    listaTarefas: listaInicial,
    addTarefaModalVisible: false,
    detalhesTarefaModalVisible: false,
    editarTarefaModalVisible: false,
    novaTarefa: { id: 0, descricao: "", situacao: "A fazer" },
    tarefaEditando: { id: 0, descricao: "", situacao: "" },
    tarefa: { id: 0, descricao: "", situacao: "" }
  },
  action
) {
  switch (action.type) {
    case "tarefas/add":
      let novaTarefa = action.novaTarefa;
      let novaLista = [...state.listaTarefas];
      novaTarefa.id = novaLista.length + 1;
      novaLista.push(novaTarefa);
      return {
        ...state,
        listaTarefas: novaLista
      };
    case "tarefas/delete":
      novaLista = [...state.listaTarefas];
      let tarefaExcluida = action.tarefa;
      novaLista.pop(tarefaExcluida);
      return {
        ...state,
        listaTarefas: novaLista
      };
    case "tarefas/edit":
      let novaListaEditada = [...state.listaTarefas];
      let indice = novaListaEditada.findIndex(tarefa => {
        return tarefa.id == action.tarefaEditando.id;
      });
      novaListaEditada[indice] = action.tarefaEditando;
      return {
        ...state,
        editarTarefaModalVisible: false,
        listaTarefas: novaListaEditada
      };
    case "adicionarModal/updateDisplay":
      return {
        ...state,
        novaTarefa: { ...action.novaTarefa }
      };
    case "adicionarModal/show":
      return {
        ...state,
        addTarefaModalVisible: true,
        novaTarefa: { id: 0, descricao: "", situacao: "A fazer" }
      };
    case "adicionarModal/hide":
      return {
        ...state,
        addTarefaModalVisible: false
      };
    case "editarModal/updateDisplay":
      return {
        ...state,
        tarefaEditando: { ...action.tarefaEditando }
      };

    case "detalhesModal/show":
      return {
        ...state,
        detalhesTarefaModalVisible: true,
        tarefa: action.tarefa
      };
    case "detalhesModal/hide":
      return {
        ...state,
        detalhesTarefaModalVisible: false
      };
    case "editarModal/show":
      return {
        ...state,
        editarTarefaModalVisible: true,
        tarefaEditando: { ...action.tarefa }
      };
    case "editarModal/hide":
      return {
        ...state,
        editarTarefaModalVisible: false
      };
    default:
      return state;
  }
}

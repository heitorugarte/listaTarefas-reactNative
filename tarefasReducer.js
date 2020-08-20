const listaInicial = [
  { id: 0, descricao: "Tarefa 1", situacao: "A fazer" },
  { id: 1, descricao: "Tarefa 2", situacao: "Concluído" }
];

export default function reducer(
  state = {
    listaTarefas: listaInicial,
    visible: false,
    selectedSituacaoPicker: "A fazer"
  },
  action
) {
  switch (action.type) {
    case "tarefas/add":
      let novaTarefa = action.tarefa;
      let novaLista = [...state.listaTarefas];
      novaLista.push(novaTarefa);
      console.log(novaLista);
      return {
        ...state,
        listaTarefas: novaLista
      };
    case "modal/show":
      return {
        ...state,
        visible: true
      };
    case "modal/hide":
      return {
        ...state,
        visible: false
      };
    case "situacaoPicker/select":
      return {
        ...state,
        selectedSituacaoPicker: action.selected
      };
    default:
      return state;
  }
}

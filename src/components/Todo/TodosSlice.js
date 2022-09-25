const initialState = [
  {
    id: 1,
    name: "Quét nhà",
    completed: false,
    prioriry: "Medium",
  },
  {
    id: 2,
    name: "Lau nhà",
    completed: true,
    prioriry: "High",
  },
  {
    id: 3,
    name: "Nấu cơm",
    completed: false,
    prioriry: "Low",
  },
  {
    id: 4,
    name: "Rửa chén",
    completed: false,
    prioriry: "Low",
  },
];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    default:
      return state;
  }
};

export default todoListReducer;

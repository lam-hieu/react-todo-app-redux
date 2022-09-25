export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

// action creatord => function

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (prioriries) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: prioriries,
  };
};

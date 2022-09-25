import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todo/TodosSlice";

// chia theo từng chức năng -> split reducer

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     };
// };

const rootReducer = combineReducers({
  // https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;

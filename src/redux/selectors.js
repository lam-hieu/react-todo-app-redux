import { createSelector } from "reselect";
// reselect

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = state => {
//     const todoRemaining = state.todoList.filter((todo) => {

//         return todo.name.includes(state.filters.search);
//     })
//     return todoRemaining;
// }

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities = {}) => {
    // status 'All' 'Completed' 'Todo'
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.prioriry)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        // Only field difference 'All'
        (status === "Completed"
          ? todo.completed
          : // If not All, Completed
            !todo.completed) &&
        (priorities.length ? priorities.includes(todo.prioriry) : true)
      );
    });
  },
);

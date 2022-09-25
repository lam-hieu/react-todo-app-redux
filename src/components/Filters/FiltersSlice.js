const initialState = {
  search: "",
  status: "All", //trạng thái mặc định
  prioriry: [], // độ ưu tiên công việc
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state.filters,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/prioritiesFilterChange":
      return {
        ...state,
        prioriries: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;

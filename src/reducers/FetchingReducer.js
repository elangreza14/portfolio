export const initialStateFetch = {
  status: "idle",
  error: null,
  code: null,
  data: null,
  totalPage: null,
  totalData: null,
  messageDetail: null,
};

export const FetchingReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, status: "fetching" };
    case "FETCHED":
      return {
        ...state,
        status: "fetched",
        data: action.payload,
        code: action.code,
        totalPage: action.totalPage,
        totalData: action.totalData,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
        code: action.code,
      };
    case "MESAGEDETAIL":
      return {
        ...state,
        messageDetail: action.messageDetail,
      };
    default:
      return state;
  }
};

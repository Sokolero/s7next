import * as types from "./types";

/* ========================================================================= */
export const usersReducer = (state=[], action) => {
  switch (action.type) {
    case types.SET_USERS:
      return action.payload.users;

    case types.CREATE_USER:
      console.log("create!")
      return [
        ...state,
        {...action.payload.user},
      ];

    case types.REMOVE_USER:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}

/* ========================================================================= */
export const loginReducer = (state={ login: "logout", credentials: {}, error: "" }, action) => {
  console.log(action)
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        login: "request",
        error: ""
      }

    case types.LOGIN_SUCCESS:
      return {
        login: "success",
        credentials: {
          token: action.payload.token,
        },
        error: ""
      };

    case types.LOGIN_FAILURE:
      return {
        login: "error",
        credentials: {},
        error: action.payload.error,
      }

    case types.LOGOUT:
      return {
        login: "logout",
        credentials: {},
        error: "",
      }

    default:
      return state;
  }
}

/* ========================================================================= */
export const filterReducer = (state="without", action) => {
  console.log(action)
  switch (action.type) {
    case types.SET_FILTER:
      return action.payload.filterType;

    default:
      return state;
  }
}

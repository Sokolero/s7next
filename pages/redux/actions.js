import * as types from "./types";
import * as axios from "axios";
import { v4 as uuidv4 } from "uuid";


export const setUsers = (data) => ({
  type: types.SET_USERS,
  payload: {
    users: data,
  },
});

/* -------- Login ----------------------------------------------------------- */
const loginRequest= () => ({
  type: types.LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    token,
  },
});

const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: {
    error,
  },
});

export const logout = () => ({
  type: types.LOGOUT,
});


export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const res = await axios.post("https://reqres.in/api/login/", {
      email: email,
      password: password,
    });

    dispatch(loginSuccess(res.data.token));
  } catch(error) {
    dispatch(loginFailure(error.message));
  }
}

/* -------- User creation ----------------------------------------------------------- */

export const createUser = (data, lastId) => ({
  type: types.CREATE_USER,
  payload: {
    user: {
      id: lastId + 1,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      avatar: "/person-square.svg",
    }
  }
});

export const removeUser = (id) => ({
  type: types.REMOVE_USER,
  payload: {
    id,
  }
});

/* -------- Filters -------------------------------------------------------- */
export const setFilter = (filterType) => ({
  type: types.SET_FILTER,
  payload: {
    filterType,
  }
});

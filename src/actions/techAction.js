import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_LOADING,
  LOGS_ERROR,
  SEARCH_LOGS,
  CLEAR_LOGS,
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECH_ERROR,
} from "./types";


// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.responsive.statusText
    });
  }
};

// add tech
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs",{
        method:'POST',
        body: JSON.stringify(tech),
        headers: {
            'Content-Type': 'application/json'
        }

    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.responsive.statusText,
    });
  }
};

// delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`,{
        method:'DELETE',
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.responsive.statusText,
    });
  }
};


// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};


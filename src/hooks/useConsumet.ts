import { useEffect, useReducer } from "react";
import { twoPeiceGetData } from "@/api/twopeice";

import { Popular } from "@/types";

interface State {
  data: Popular[];
  loading: boolean;
  error: boolean | Error;
}

interface FetchSuccessAction {
  type: "FETCH_SUCCESS";
  payload: Popular[];
}

interface FetchFailureAction {
  type: "FETCH_FAILURE";
  payload: Error;
}

type Action = FetchSuccessAction | FetchFailureAction;

const initialState: State = {
  data: [],
  loading: true,
  error: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default function useConsumet() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    twoPeiceGetData()
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Error");
        }
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE", payload: err });
      });
  }, []);

  return state;
}

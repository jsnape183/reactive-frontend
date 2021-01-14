import { createReducer } from "@reduxjs/toolkit";
import { updateProject } from "../actions/project";

const initialState = {
  project: {
    generatedProject: {},
    generatedCode: "",
    componentTree: {},
  },
};

const reducer = createReducer(initialState, {
  [updateProject.type]: (state, action) => ({
    ...state,
    project: action.payload.project,
  }),
});

export default reducer;

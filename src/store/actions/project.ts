import { createAction } from "@reduxjs/toolkit";

export const updateProject = createAction("UPDATE_PROJECT", (project) => ({
  payload: {
    project,
  },
}));

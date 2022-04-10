import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST"],
        },
    }),
});
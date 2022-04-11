import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";
import eventReducer from "./EventListSlice";

export default configureStore({
    reducer: {
        tasks: taskReducer,
        events: eventReducer
    }
});
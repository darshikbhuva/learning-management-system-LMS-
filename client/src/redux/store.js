import { configureStore } from "@reduxjs/toolkit";
2;
import rootReducer from "./rootReducer.js";
import { authApi } from "@/features/api/authApi.js";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(authApi.middleware),
});

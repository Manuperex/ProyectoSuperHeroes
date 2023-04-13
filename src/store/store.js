// redux configuration
import { configureStore } from "@reduxjs/toolkit";

// Import file with reducer
import heroReducer from "./slices/heroSlices";

export default configureStore({
  reducer: {
    hero: heroReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        // Ignore state paths, e.g. state for 'items':
        ignoredPaths: ["items.data"],
      },
      serializableCheck: { ignoredPaths: ["some.nested.path"] },
    }),
});

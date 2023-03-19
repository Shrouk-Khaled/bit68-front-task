import { configureStore } from "@reduxjs/toolkit";
import items from "./reducers/items";
import brands from "./reducers/brands";
import categories from "./reducers/categories";
import slider from "./reducers/slider";

const store = configureStore({
  reducer: {
    items: items,
    brands: brands,
    categories: categories,
    slider: slider
  },
});

export default store;

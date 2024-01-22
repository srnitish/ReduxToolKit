import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../features/trySlice";

export const store = configureStore({
    reducer: {
        //Here show is the key, from which we can access the data/value from the store i.e const data = useSelector((state) => state.show.value);
        show: allReducers
    },
})
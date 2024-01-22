import { createSlice } from "@reduxjs/toolkit";

// const initialState = { value: 0 }

const getStoredUsername = () => {
    return localStorage.getItem('username') || ''
}

export const counterSlice = createSlice({
    name: 'counter', //name of the slice
    initialState: {
        value: 0,
        incValue: 0,
        username: getStoredUsername(),
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },

        decrement: (state) => {
            state.value = state.value - 1;
        },

        incrementByValue: (state, action) => {
            state.incValue = state.incValue + action.payload;
        },

        setUsername: (state, action) => {
            state.username = action.payload;
            localStorage.setItem('username', action.payload);

        },

        removeUsername: (state, action) => {
            state.username = '';
            localStorage.removeItem('username', action.payload);
        }

    }
})

export const { increment, decrement, setUsername, removeUsername, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
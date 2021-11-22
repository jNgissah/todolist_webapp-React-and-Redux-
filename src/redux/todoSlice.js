import { createSlice } from "@reduxjs/toolkit"

const TodoSlice = createSlice({

    name: "todos",
    initialState: [
        { id: 1, title: "book", details:"good", complete: 0 },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.length + 1,
                title: action.payload.title,
                details: action.payload.details,
                complete: false
            };
            state.push(newTodo)
        },
        completeList: (state, action) => {

            const index = state.findIndex(bug => bug.id === action.payload.id)
           
            state[index].complete= true
            
        },
        deleteList: (state, action) => {
          
            return state.filter(bug => bug.id !== action.payload.id)

          

        },
    },

})

export const { addTodo, completeList, deleteList } = TodoSlice.actions;
export default TodoSlice.reducer;
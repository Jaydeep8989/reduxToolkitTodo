import {createSlice, nanoid} from '@reduxjs/toolkit';
// nanoid Method ----> Generate the unique id

const initialState ={
    todos: [{id: 1, text: "hellow world!"}]
}

// Slice we will  create using the CreateSlice and that has a object as a para
export const todoSlice = createSlice({
    // name property came from the toolkit default property 
    name: 'todo',
    initialState,
    //reducres has a property and a function
    reducers: {
        // function always have a things state and action
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload 
            }
            state.todos.push(todo); 
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

// needs to export the indivual reducres from the reducres and export the default reducer

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
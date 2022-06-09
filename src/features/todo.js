import {createSlice} from '@reduxjs/toolkit';
export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        todos:[],
        lastid:0,
        filter:false
    },
    reducers:{
        add :(state,action )=>{
            state.todos.push({
                id:state.lastid,
                disc:action.payload,
                state:false
            })
            state.lastid = state.lastid +1
        },
        done :(state,action )=>{
            let isdone=state.todos.find(s => s.id === action.payload);
            isdone.state= !isdone.state;
        },
        edit :(state,action )=>{
            state.todos.find(s => s.id === action.payload.id).disc = action.payload.disc;
            
        },
        filerdone :(state,action )=>{
            state.filter = !state.filter;
            
        },
    }
});
export const {add,done,edit,filerdone}=todoSlice.actions
export default todoSlice.reducer 
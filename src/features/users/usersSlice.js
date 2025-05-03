import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk ('users/fetchUsers', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data)
        return response.data
      } catch (error) {
        console.error(error);
      }
    
});

const initialState = {
    data:[], status: 'idle'
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.data = state.data.sort((a,b) => a.id - b.id)
            let id = state.data.length + 1
            state.data.forEach((element, index)=>{
                if(1+index !== element.id){ 
                    id = index + 1
                    console.log(element.id)
                }
            })
           
            
            const user = {...action.payload, id}
            state.data.push(user)
            

            console.log(state.data[0].id)
            

        },
        deleteUser:(state,action) => {
            state.data = state.data.filter((elem) =>  action.payload !== elem.id) 
            console.log( (state.data.filter((elem) =>  action.payload === elem.id)).id )
            console.log(...state.data)
        }
       
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = 'failed';
        })
    }
})
export const {addUser} = userSlice.actions
export const {deleteUser} = userSlice.actions
export default userSlice.reducer;
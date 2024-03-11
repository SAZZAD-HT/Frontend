import { 
    createSlice 
} from "@reduxjs/toolkit";

const initialState={
    folderLists:[]
}

const folderSetupSlice=createSlice({
    name:'folderSetupSlice',
    initialState,
    reducers:{
        updateFolderLists:(state,action)=>{
            state.folderLists=action.payload.lists;
        },
    }
})

export const {
    updateFolderLists
}=folderSetupSlice.actions;
export default folderSetupSlice.reducer;
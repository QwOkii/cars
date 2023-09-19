import { PayloadAction, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Item } from "./type/type";
import { CatalogAPI } from "../API/CatalogAPI";

interface InitialStateType{
    ListItem:Array<Item>
}

const InitialState:InitialStateType={
    ListItem:[]
}

export const GetListofItem = createAsyncThunk('GET-LIST-OF-ITEM',async (values,{dispatch})=>{
    const res = await new CatalogAPI().ListItemGet()
    dispatch(SetListofItems(res))

})

const SetListofItems = createAction<Array<Item>>('SET-LIST-OF-ITEMS')

export const Catalog = createReducer(InitialState,{
    [SetListofItems.type]:(state,action:PayloadAction<Array<Item>>)=>{
        return{
            ...state,
            ListItem:action.payload
        }
    }
})
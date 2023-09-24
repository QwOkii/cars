import { PayloadAction, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { FilterData, FilterDataPost, Item } from "./type/type";
import { CatalogAPI } from "../API/CatalogAPI";

interface InitialStateType{
    ListItem:Array<Item>,
    Data:any,
    markes:string,
    body_style:string,
    fuels:string
    year:{
        max:number | undefined,
        min:number| undefined
    },
    odometer:{
        max:number| undefined,
        min:number| undefined
    },
    accident:{
        max:number| undefined,
        min:number| undefined
    },
    isload:boolean
}

const InitialState:InitialStateType={
    ListItem:[],
    Data:{
        body_styles:{},
        colors:{},
        drive_types:{},
        engine_types:{},
        fuels:{},
        keys:{},
        makes:{},
        models:{},
        odometers:{},
        pre_accident_values:{},
        primary_damages:{},
        transmissions:{},
        years:{},
        year_borders:{
            max:0,
            min:0
        },
        odometer_borders:{
            max:0,
            min:0
        },
        pre_accident_value_borders:{
            max:0,
            min:0
        },

    } as FilterData,
    markes:'',
    body_style:'',
    fuels:'',
    accident:{
        max:0,
        min:0
    },
    odometer:{
        max:0,
        min:0
    },
    year:{
        max:0,
        min:0
    },
    isload:true
}

export const GetListofItem = createAsyncThunk<unknown,FilterDataPost>('GET-LIST-OF-ITEM',async (values,{dispatch})=>{
    console.log('call thunk');
    const res = await new CatalogAPI().ListItemGet(values)
    dispatch(SetListofItems(res))

})
export const GetFilterData = createAsyncThunk('GET-FILTER-DATA',async (_,{dispatch})=>{
    const res = await new CatalogAPI().GetDataFiltr()
    console.log(res);
    dispatch(SetFilterData(res))
})

const SetListofItems = createAction<Array<Item>>('SET-LIST-OF-ITEMS')

const SetFilterData = createAction<FilterData>('SET-FILTER-DATA')

export const setFuel = createAction<string>('SET-FUEL')
export const setMark = createAction<string>('SET-MARK')
export const setbody_style = createAction<string>('SET-BORY_STYLE')

export const setYear = createAction<{min:number,max:number}>('SET-Year')
export const setOdometr = createAction<{min:number,max:number}>('SET-Odometr')
export const setaccident = createAction<{min:number,max:number}>('SET-accident')

export const Catalog = createReducer(InitialState,{
    [SetListofItems.type]:(state:InitialStateType,action:PayloadAction<Array<Item>>)=>{
        return{
            ...state,
            ListItem:action.payload
        }
    },
    [SetFilterData.type]:(state:InitialStateType,action:PayloadAction<FilterData>)=>{

        return{
            ...state,
            Data:action.payload,
            isload:false
        }
    },
    [setFuel.type]:(state,action:PayloadAction<string>)=>{
        return{
            ...state,
            fuels:action.payload
        }
    },
    [setMark.type]:(state,action:PayloadAction<string>)=>{
        return{
            ...state,
            markes:action.payload
        }
    },
    [setbody_style.type]:(state,action:PayloadAction<string>)=>{
        return{
            ...state,
            body_style:action.payload
        }
    },
    [setOdometr.type]:(state,action:PayloadAction<{min:number,max:number}>)=>{
        return{
            ...state,
            odometer:action.payload
        }
    },
    [setYear.type]:(state,action:PayloadAction<{min:number,max:number}>)=>{
        return{
            ...state,
            year:action.payload,
            isload:false
            
        }
    },
    [setaccident.type]:(state,action:PayloadAction<{min:number,max:number}>)=>{
        return{
            ...state,
            accident:action.payload,
            isload:false
            
        }
    }

})
import { PayloadAction, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { FilterData, FilterDataPost, Item } from "./type/type";
import { CatalogAPI } from "../API/CatalogAPI";

interface InitialStateType{
    ListItem:Array<Item>,
    Data:any,
    markes:string,
    body_style:string,
    fuels:string
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
    fuels:''
}

export const GetListofItem = createAsyncThunk<unknown,FilterDataPost>('GET-LIST-OF-ITEM',async (values,{dispatch})=>{
    console.log('call thunk');
    const res = await new CatalogAPI().ListItemGet(values)
    dispatch(SetListofItems(res))

})
export const GetFilterData = createAsyncThunk('GET-FILTER-DATA',async (_,{dispatch})=>{
    const res = await new CatalogAPI().GetDataFiltr()
    dispatch(SetFilterData(res))
})

const SetListofItems = createAction<Array<Item>>('SET-LIST-OF-ITEMS')

const SetFilterData = createAction<FilterData>('SET-FILTER-DATA')

export const setFuel = createAction<string>('SET-FUEL')
export const setMark = createAction<string>('SET-MARK')
export const setbody_style = createAction<string>('SET-BORY_STYLE')

export const Catalog = createReducer(InitialState,{
    [SetListofItems.type]:(state:InitialStateType,action:PayloadAction<Array<Item>>)=>{
        return{
            ...state,
            ListItem:action.payload
        }
    },
    [SetFilterData.type]:(state:InitialStateType,action:PayloadAction<FilterData>)=>{
        let makesArr:any
        if(action.payload.makes !==undefined){
            makesArr= Object.entries(action.payload.makes).map(([key,value])=>({value:key,label:key}))
        }
        let modelArr:any
        if(action.payload.models !==undefined){
            modelArr= Object.entries(action.payload.models).map(([key,value])=>({value:key,label:key}))
        }
        let colorsArr:any
        if(action.payload.colors !==undefined){
            colorsArr= Object.entries(action.payload.colors).map(([key,value])=>({value:key,label:key}))
        }
        let body_stylesArr:any
        if(action.payload.body_styles !==undefined){
            body_stylesArr= Object.entries(action.payload.body_styles).map(([key,value])=>({value:key,label:key}))
        }
        let drive_typesArr:any
        if(action.payload.drive_types !==undefined){
            drive_typesArr= Object.entries(action.payload.drive_types).map(([key,value])=>({value:key,label:key}))
        }
        let engine_typesArr:any
        if(action.payload.engine_types !==undefined){
            engine_typesArr= Object.entries(action.payload.engine_types).map(([key,value])=>({value:key,label:key}))
        }
        let fuelsArr:any
        if(action.payload.fuels !==undefined){
            fuelsArr= Object.entries(action.payload.fuels).map(([key,value])=>({value:key,label:key}))
        }
        let keysArr:any
        if(action.payload.keys !==undefined){
            keysArr= Object.entries(action.payload.keys).map(([key,value])=>({value:key,label:key}))
        }
        let odometersArr:any
        if(action.payload.odometers !==undefined){
            odometersArr= Object.entries(action.payload.odometers).map(([key,value])=>({value:key,label:key}))
        }
        let pre_accident_valuesArr:any
        if(action.payload.pre_accident_values !==undefined){
            pre_accident_valuesArr= Object.entries(action.payload.pre_accident_values).map(([key,value])=>({value:key,label:key}))
        }
        let primary_damagesArr:any
        if(action.payload.primary_damages !==undefined){
            primary_damagesArr= Object.entries(action.payload.primary_damages).map(([key,value])=>({value:key,label:key}))
        }
        let transmissionsArr:any
        if(action.payload.transmissions !==undefined){
            transmissionsArr= Object.entries(action.payload.transmissions).map(([key,value])=>({value:key,label:key}))
        }
        let yearsArr:any
        if(action.payload.years !==undefined){
            yearsArr= Object.entries(action.payload.years).map(([key,value])=>({value:key,label:key}))
        }
        return{
            ...state,
            Data:{
                ...state.Data,
                makes: makesArr,
                models: modelArr,
                colors: colorsArr,
                body_styles:body_stylesArr,
                drive_types:drive_typesArr,
                engine_types:engine_typesArr,
                fuels:fuelsArr,
                keys:keysArr,
                odometers:odometersArr,
                pre_accident_values:pre_accident_valuesArr,
                primary_damages:primary_damagesArr,
                transmissions:transmissionsArr,
                years:yearsArr,
                year_borders:{
                    max:action.payload.year_borders?.max,
                    min:action.payload.year_borders?.min
                },
                odometer_borders:{
                    max:action.payload.odometer_borders?.max,
                    min:action.payload.odometer_borders?.min
                },
                pre_accident_value_borders:{
                    max:action.payload.pre_accident_value_borders?.max,
                    min:action.payload.pre_accident_value_borders?.min
                },

            }
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
    }

})
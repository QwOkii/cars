import  axios from "axios"
import {  FilterDataPost } from "../app/type/type"

const base = axios.create({
    baseURL:"https://test-adolbi-cars-api-0a53b7c73b49.herokuapp.com"
})


export class CatalogAPI {
    async ListItemGet({body_style,color,drive_type,engine_type,fuel,key,make,model,odometer_from,odometer_to,pre_accident_value_from,pre_accident_value_to,primary_damage,transmission,year_from,year_to}:FilterDataPost){
        const res = await base.get(`/lots/?body_style=${body_style}&color=${color}&drive_type=${drive_type}&engine_type=${engine_type}&fuel=${fuel}&key=${key}&model=${model}&make=${make}&odometer_from=${odometer_from}&odometer_to=${odometer_to}&pre_accident_value_from=${pre_accident_value_from}&pre_accident_value_to=${pre_accident_value_to}&primary_damage=${primary_damage}&transmission=${transmission}&year_from=${year_from}&year_to=${year_to}`).then(u =>u)
        console.log('call api');
        return res.data
    }
    async GetDataFiltr(){
        const res = await base.get<any>('/get_params').then(u =>u)
        return res.data
    }
}   

import axios from "axios"
import { ItemDetails } from "../app/type/type"

const base = axios.create({
    baseURL:"https://test-adolbi-cars-api-0a53b7c73b49.herokuapp.com/"
}) 

export class ItemPageAPI{
    async GetItemByID(id:number | undefined){
        const res = base.get(`/lot_details/${id}`).then(u =>u.data)
        return res
    }
}
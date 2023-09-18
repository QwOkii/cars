import  axios from "axios"

const base = axios.create({
    baseURL:"https://test-adolbi-cars-api-0a53b7c73b49.herokuapp.com/"
})

export class CatalogAPI {
    async ListItemGet(){
        const res = await base.get('/').then(u =>u)
        return res.data
    }
    
}   

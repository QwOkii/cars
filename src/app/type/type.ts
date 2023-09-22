
export type Item ={
    lot_number:number,
    lot_name:string,
    VIN_code:string,
    keys:string,
    year:number,
    current_bid:number,
    odometer:number,
    odometer_type:string,
    primary_damage:string,
    fuel:string,
    engine_type:string,
    images:string,
    drive_type:string
}

export type ItemDetails ={
    lot_name:  string ,
    lot_number:  string ,
    location :  string ,
    fuel:  string ,
    year: number,
    odometer: number,
    odometer_type:  string ,
    keys:  string ,
    VIN_code:  string ,
    primary_damage:  string ,
    drive_type:  string ,
    color:  string ,
    engine_type:  string ,
    current_bid: number,
    images: {
        FULL_IMAGE:Array<string>
    }
}

export interface FilterData{
    makes?: Record<string, number> | undefined
    models?: Record<string, number> | undefined
    years?: Record<string, number> | undefined
    pre_accident_values?:Record<string, number> | undefined
    odometers?: Record<string, number> | undefined
    keys?: Record<string, number> | undefined
    body_styles?: Record<string, number> | undefined
    fuels?: Record<string, number> | undefined
    colors?: Record<string, number> | undefined
    drive_types?: Record<string, number> | undefined
    primary_damages?: Record<string, number> | undefined
    transmissions?: Record<string, number> | undefined
    engine_types?: Record<string, number> | undefined
    year_borders?:{
        min:number,
        max:number
    },
    pre_accident_value_borders?:{
        min:number,
        max:number
    },
    odometer_borders?:{
        min:number,
        max:number
    },
}

export interface FilterDataPost{
    make?:string,
    model?: string,
    key?:  string,
    body_style?:  string,
    fuel?:  string,
    color?:  string,
    drive_type?:  string,
    primary_damage?: string,
    transmission?:  string,
    engine_type?:  string,
    year_from?:number,
    year_to?: number,
    pre_accident_value_from?: number,
    pre_accident_value_to?: number,
    odometer_from?: number,
    odometer_to?: number,
            
}



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
    image:string,
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
    images_list: {
        HIGH_RESOLUTION_IMAGE :Array<string>,
        THUMBNAIL_IMAGE:Array<string>,
        FULL_IMAGE:Array<string>
    }
}


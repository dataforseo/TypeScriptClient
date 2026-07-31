export interface IGpsCoordinatesLocationInfo   {
        
        /** *latitude coordinate of the hotel in google maps* example: `'latitude': 51.584091` */
        latitude?: number | undefined
        
        /** *longitude coordinate of the hotel in google maps* example: `'longitude': -0.31365919999999997` */
        longitude?: number | undefined

    [key: string]: any;

    }

export class GpsCoordinatesLocationInfo  implements IGpsCoordinatesLocationInfo {

    
    /** *latitude coordinate of the hotel in google maps* example: `'latitude': 51.584091` */

    latitude?: number | undefined;

    
    /** *longitude coordinate of the hotel in google maps* example: `'longitude': -0.31365919999999997` */

    longitude?: number | undefined;

    [key: string]: any;


    constructor(data?: IGpsCoordinatesLocationInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.latitude = data["latitude"];
            this.longitude = data["longitude"];
        }
    }

    static fromJS(data: any): GpsCoordinatesLocationInfo {
        data = typeof data === 'object' ? data : {};


        let result = new GpsCoordinatesLocationInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["latitude"] = this.latitude;
        data["longitude"] = this.longitude;
        return data;
    }
}
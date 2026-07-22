export interface IAvailableLocations   {
        
        /** location code */
        location_code?: number | undefined
        
        /** location name */
        location_name?: string | undefined
        
        /** ISO country code of the location */
        country_iso_code?: string | undefined
        
        /** location type
possible values:
Country, Region */
        location_type?: string | undefined

    [key: string]: any;

    }

export class AvailableLocations  implements IAvailableLocations {

    
    /** location code */

    location_code?: number | undefined;

    
    /** location name */

    location_name?: string | undefined;

    
    /** ISO country code of the location */

    country_iso_code?: string | undefined;

    
    /** location type
possible values:
Country, Region */

    location_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IAvailableLocations) {

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
            this.location_code = data["location_code"];
            this.location_name = data["location_name"];
            this.country_iso_code = data["country_iso_code"];
            this.location_type = data["location_type"];
        }
    }

    static fromJS(data: any): AvailableLocations {
        data = typeof data === 'object' ? data : {};


        let result = new AvailableLocations();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["location_name"] = this.location_name;
        data["country_iso_code"] = this.country_iso_code;
        data["location_type"] = this.location_type;
        return data;
    }
}
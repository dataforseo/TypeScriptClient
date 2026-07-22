export interface IAbsoluteItems   {
        
        /** location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY */
        geo_id?: string | undefined
        
        /** location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra */
        geo_name?: string | undefined
        
        /** contains data on relative keyword popularity by country or region */
        values?: string[] | undefined

    [key: string]: any;

    }

export class AbsoluteItems  implements IAbsoluteItems {

    
    /** location identifier
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
US-NY */

    geo_id?: string | undefined;

    
    /** location name
you can use this field for matching obtained results with location parameters specified in the request
see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
example:
Andorra */

    geo_name?: string | undefined;

    
    /** contains data on relative keyword popularity by country or region */

    values?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IAbsoluteItems) {

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
            this.geo_id = data["geo_id"];
            this.geo_name = data["geo_name"];
            this.values = data["values"];
        }
    }

    static fromJS(data: any): AbsoluteItems {
        data = typeof data === 'object' ? data : {};


        let result = new AbsoluteItems();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["geo_id"] = this.geo_id;
        data["geo_name"] = this.geo_name;
        data["values"] = this.values;
        return data;
    }
}
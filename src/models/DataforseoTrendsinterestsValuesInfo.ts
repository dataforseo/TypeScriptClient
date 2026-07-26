export interface IDataforseoTrendsinterestsValuesInfo   {
        
        /** location identifier you can use this field for matching obtained results with location parameters specified in the request see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations example: US-NY */
        geo_id?: string | undefined
        
        /** location name you can use this field for matching obtained results with location parameters specified in the request see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations example: Andorra */
        geo_name?: string | undefined
        
        /** relative keyword popularity rate in a given location represents location-specific keyword popularity rate over the specified time range; using this value you can understand how popular a keyword is in one location compared to another location; calculation: we determine the highest popularity value for the relevant keyword across all locations, and then express all other values as a percentage of that highest value (100); a value of 100 is the highest popularity for the term a value of 50 means that the term is half as popular a value of 0 means there was not enough data for this term */
        value?: number | undefined

    [key: string]: any;

    }

export class DataforseoTrendsinterestsValuesInfo  implements IDataforseoTrendsinterestsValuesInfo {

    
    /** location identifier you can use this field for matching obtained results with location parameters specified in the request see the full list of available locations with their geo_id here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations example: US-NY */

    geo_id?: string | undefined;

    
    /** location name you can use this field for matching obtained results with location parameters specified in the request see the full list of available locations with their geo_name here or by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations example: Andorra */

    geo_name?: string | undefined;

    
    /** relative keyword popularity rate in a given location represents location-specific keyword popularity rate over the specified time range; using this value you can understand how popular a keyword is in one location compared to another location; calculation: we determine the highest popularity value for the relevant keyword across all locations, and then express all other values as a percentage of that highest value (100); a value of 100 is the highest popularity for the term a value of 50 means that the term is half as popular a value of 0 means there was not enough data for this term */

    value?: number | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsinterestsValuesInfo) {

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
            this.value = data["value"];
        }
    }

    static fromJS(data: any): DataforseoTrendsinterestsValuesInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsinterestsValuesInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["geo_id"] = this.geo_id;
        data["geo_name"] = this.geo_name;
        data["value"] = this.value;
        return data;
    }
}
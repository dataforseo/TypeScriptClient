export interface ITrendsMapDataInfo   {
        
        /** Google Trends location identifier you can use this field for matching obtained results with location parameters specified in the request example: US-NY */
        geo_id?: string | undefined
        
        /** Google Trends location name you can use this field for matching obtained results with location parameters specified in the request */
        geo_name?: string | undefined
        
        /** relative keyword popularity rate in a given location represents the location-specific keyword popularity rate over the given time range if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords a value of 100 is the peak popularity for the term a value of 50 means that the term is half as popular a value of 0 means there was not enough data for this term */
        values?: number[] | undefined
        
        /** max value among comparable terms represents the maximum value if you specified more than two keywords in a POST array if you specified only one keyword, the value will be null */
        max_value_index?: number | undefined

    [key: string]: any;

    }

export class TrendsMapDataInfo  implements ITrendsMapDataInfo {

    
    /** Google Trends location identifier you can use this field for matching obtained results with location parameters specified in the request example: US-NY */

    geo_id?: string | undefined;

    
    /** Google Trends location name you can use this field for matching obtained results with location parameters specified in the request */

    geo_name?: string | undefined;

    
    /** relative keyword popularity rate in a given location represents the location-specific keyword popularity rate over the given time range if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords a value of 100 is the peak popularity for the term a value of 50 means that the term is half as popular a value of 0 means there was not enough data for this term */

    values?: number[] | undefined;

    
    /** max value among comparable terms represents the maximum value if you specified more than two keywords in a POST array if you specified only one keyword, the value will be null */

    max_value_index?: number | undefined;

    [key: string]: any;


    constructor(data?: ITrendsMapDataInfo) {

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
            this.max_value_index = data["max_value_index"];
        }
    }

    static fromJS(data: any): TrendsMapDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TrendsMapDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["geo_id"] = this.geo_id;
        data["geo_name"] = this.geo_name;
        data["values"] = this.values;
        data["max_value_index"] = this.max_value_index;
        return data;
    }
}
export interface IBusinessDataBusinessListingsLocationsResultInfo   {
        
        /** *full name of the location* */
        location_name?: string | undefined
        
        /** *ISO country code of the location* */
        country_iso_code?: string | undefined
        
        /** *number of businesses in this location in our database* */
        business_count?: number | undefined

    [key: string]: any;

    }

export class BusinessDataBusinessListingsLocationsResultInfo  implements IBusinessDataBusinessListingsLocationsResultInfo {

    
    /** *full name of the location* */

    location_name?: string | undefined;

    
    /** *ISO country code of the location* */

    country_iso_code?: string | undefined;

    
    /** *number of businesses in this location in our database* */

    business_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsLocationsResultInfo) {

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
            this.location_name = data["location_name"];
            this.country_iso_code = data["country_iso_code"];
            this.business_count = data["business_count"];
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsLocationsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsLocationsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_name"] = this.location_name;
        data["country_iso_code"] = this.country_iso_code;
        data["business_count"] = this.business_count;
        return data;
    }
}
export interface IDomainAnalyticsTechnologiesLocationsResultInfo   {
        
        /** full name of the location */
        location_name?: string | undefined
        
        /** ISO country code of the location */
        country_iso_code?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesLocationsResultInfo  implements IDomainAnalyticsTechnologiesLocationsResultInfo {

    
    /** full name of the location */

    location_name?: string | undefined;

    
    /** ISO country code of the location */

    country_iso_code?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesLocationsResultInfo) {

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
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesLocationsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesLocationsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_name"] = this.location_name;
        data["country_iso_code"] = this.country_iso_code;
        return data;
    }
}
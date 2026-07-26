export interface ICountryDistribution   {
        
        /** country ISO code */
        country_iso_code?: string | undefined
        
        /** clickstream-based average monthly search volume rate represents the (approximate) number of searches for the given keyword idea based on clickstream you can learn more about clickstream search volume in this Help Center article */
        search_volume?: number | undefined
        
        /** percentage of global search volume */
        percentage?: number | undefined

    [key: string]: any;

    }

export class CountryDistribution  implements ICountryDistribution {

    
    /** country ISO code */

    country_iso_code?: string | undefined;

    
    /** clickstream-based average monthly search volume rate represents the (approximate) number of searches for the given keyword idea based on clickstream you can learn more about clickstream search volume in this Help Center article */

    search_volume?: number | undefined;

    
    /** percentage of global search volume */

    percentage?: number | undefined;

    [key: string]: any;


    constructor(data?: ICountryDistribution) {

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
            this.country_iso_code = data["country_iso_code"];
            this.search_volume = data["search_volume"];
            this.percentage = data["percentage"];
        }
    }

    static fromJS(data: any): CountryDistribution {
        data = typeof data === 'object' ? data : {};


        let result = new CountryDistribution();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["country_iso_code"] = this.country_iso_code;
        data["search_volume"] = this.search_volume;
        data["percentage"] = this.percentage;
        return data;
    }
}
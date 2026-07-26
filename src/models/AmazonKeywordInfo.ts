export interface IAmazonKeywordInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** date and time when keyword data was updated in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example:    '2019-11-15 12:57:46 +00:00' */
        last_updated_time?: string | undefined
        
        /** average monthly search volume rate represents the (approximate) number of searches for the provided keyword idea on Amazon */
        search_volume?: number | undefined

    [key: string]: any;

    }

export class AmazonKeywordInfo  implements IAmazonKeywordInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** date and time when keyword data was updated in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example:    '2019-11-15 12:57:46 +00:00' */

    last_updated_time?: string | undefined;

    
    /** average monthly search volume rate represents the (approximate) number of searches for the provided keyword idea on Amazon */

    search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IAmazonKeywordInfo) {

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
            this.se_type = data["se_type"];
            this.last_updated_time = data["last_updated_time"];
            this.search_volume = data["search_volume"];
        }
    }

    static fromJS(data: any): AmazonKeywordInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonKeywordInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["last_updated_time"] = this.last_updated_time;
        data["search_volume"] = this.search_volume;
        return data;
    }
}
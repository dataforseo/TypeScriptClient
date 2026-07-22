import { AmazonKeywordInfo, IAmazonKeywordInfo } from "./AmazonKeywordInfo";


export interface IAmazonKeywordData   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** related keyword */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** keyword info for the returned keyword */
        keyword_info?: AmazonKeywordInfo | undefined

    [key: string]: any;

    }

export class AmazonKeywordData  implements IAmazonKeywordData {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** related keyword */

    keyword?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** keyword info for the returned keyword */

    keyword_info?: AmazonKeywordInfo | undefined;

    [key: string]: any;


    constructor(data?: IAmazonKeywordData) {

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
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.keyword_info = data["keyword_info"] ? AmazonKeywordInfo.fromJS(data["keyword_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AmazonKeywordData {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonKeywordData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["keyword_info"] = this.keyword_info ? AmazonKeywordInfo.fromJS(this.keyword_info)?.toJSON() : <any>undefined;
        return data;
    }
}
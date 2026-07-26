import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";


export interface IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** keyword in a POST array */
        seed_keyword?: string | undefined
        
        /** keyword data for the seed keyword fields in this object are identical to those of the items array */
        seed_keyword_data?: KeywordDataInfo | undefined
        
        /** location code in a POST array if there is no data, then the value is null */
        location_code?: number | undefined
        
        /** language code in a POST array if there is no data, then the value is null */
        language_code?: string | undefined
        
        /** total amount of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** current offset value */
        offset?: number | undefined
        
        /** offset token for subsequent requests you can use the string provided in this field to get the subsequent results of the initial task; note: offset_token values are unique for each subsequent task */
        offset_token?: string | undefined
        
        /** contains keywords and related data */
        items?: KeywordDataInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo  implements IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** keyword in a POST array */

    seed_keyword?: string | undefined;

    
    /** keyword data for the seed keyword fields in this object are identical to those of the items array */

    seed_keyword_data?: KeywordDataInfo | undefined;

    
    /** location code in a POST array if there is no data, then the value is null */

    location_code?: number | undefined;

    
    /** language code in a POST array if there is no data, then the value is null */

    language_code?: string | undefined;

    
    /** total amount of results in our database relevant to your request */

    total_count?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** current offset value */

    offset?: number | undefined;

    
    /** offset token for subsequent requests you can use the string provided in this field to get the subsequent results of the initial task; note: offset_token values are unique for each subsequent task */

    offset_token?: string | undefined;

    
    /** contains keywords and related data */

    items?: KeywordDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo) {

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
            this.seed_keyword = data["seed_keyword"];
            this.seed_keyword_data = data["seed_keyword_data"] ? KeywordDataInfo.fromJS(data["seed_keyword_data"]) : <any>undefined;
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KeywordDataInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["seed_keyword"] = this.seed_keyword;
        data["seed_keyword_data"] = this.seed_keyword_data ? KeywordDataInfo.fromJS(this.seed_keyword_data)?.toJSON() : <any>undefined;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}
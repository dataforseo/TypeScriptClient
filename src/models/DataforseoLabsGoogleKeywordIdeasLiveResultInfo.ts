import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";


export interface IDataforseoLabsGoogleKeywordIdeasLiveResultInfo   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *keywords in a POST array* **keywords are returned with decoded %## (plus character '+' will be decoded to a space character)** */
        seed_keywords?: string[] | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *total number of results relevant to your request in our database* */
        total_count?: number | undefined
        
        /** *number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *current offset value* */
        offset?: number | undefined
        
        /** *offset token for subsequent requests* you can use the string provided in this field to get the subsequent results of the initial task; **note:** `offset_token` values are unique for each subsequent task */
        offset_token?: string | undefined
        
        /** *contains keyword ideas and related data* */
        items?: KeywordDataInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordIdeasLiveResultInfo  implements IDataforseoLabsGoogleKeywordIdeasLiveResultInfo {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *keywords in a POST array* **keywords are returned with decoded %## (plus character '+' will be decoded to a space character)** */

    seed_keywords?: string[] | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *total number of results relevant to your request in our database* */

    total_count?: number | undefined;

    
    /** *number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *current offset value* */

    offset?: number | undefined;

    
    /** *offset token for subsequent requests* you can use the string provided in this field to get the subsequent results of the initial task; **note:** `offset_token` values are unique for each subsequent task */

    offset_token?: string | undefined;

    
    /** *contains keyword ideas and related data* */

    items?: KeywordDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo) {

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
            this.seed_keywords = data["seed_keywords"];
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

    static fromJS(data: any): DataforseoLabsGoogleKeywordIdeasLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordIdeasLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["seed_keywords"] = this.seed_keywords;
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
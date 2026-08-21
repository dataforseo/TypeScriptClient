import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";


export interface IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *categories in a POST array* */
        seed_categories?: number[] | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *the total amount of results in our database relevant to your request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *current offset value* */
        offset?: number | undefined
        
        /** *offset token for subsequent requests* you can use the string provided in this field to get the subsequent results of the initial task; **note:** `offset_token` values are unique for each subsequent task */
        offset_token?: string | undefined
        
        /** *contains keyword ideas and related data* */
        items?: KeywordDataInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo  implements IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *categories in a POST array* */

    seed_categories?: number[] | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *the total amount of results in our database relevant to your request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *current offset value* */

    offset?: number | undefined;

    
    /** *offset token for subsequent requests* you can use the string provided in this field to get the subsequent results of the initial task; **note:** `offset_token` values are unique for each subsequent task */

    offset_token?: string | undefined;

    
    /** *contains keyword ideas and related data* */

    items?: KeywordDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo) {

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
            this.seed_categories = data["seed_categories"];
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

    static fromJS(data: any): DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["seed_categories"] = this.seed_categories;
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
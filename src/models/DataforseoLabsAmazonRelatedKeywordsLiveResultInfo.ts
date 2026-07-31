import { AmazonKeywordData, IAmazonKeywordData } from "./AmazonKeywordData";
import { DataforseoLabsAmazonRelatedKeywordsLiveItem, IDataforseoLabsAmazonRelatedKeywordsLiveItem } from "./DataforseoLabsAmazonRelatedKeywordsLiveItem";


export interface IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *keyword in a POST array* */
        seed_keyword?: string | undefined
        
        /** *keyword data for the seed keyword* fields in the object are identical to that of `keyword_data` */
        seed_keyword_data?: AmazonKeywordData | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *total amount of results in our database relevant to your request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *contains objects with keywords and related data* */
        items?: DataforseoLabsAmazonRelatedKeywordsLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonRelatedKeywordsLiveResultInfo  implements IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *keyword in a POST array* */

    seed_keyword?: string | undefined;

    
    /** *keyword data for the seed keyword* fields in the object are identical to that of `keyword_data` */

    seed_keyword_data?: AmazonKeywordData | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *total amount of results in our database relevant to your request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *contains objects with keywords and related data* */

    items?: DataforseoLabsAmazonRelatedKeywordsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo) {

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
            this.seed_keyword_data = data["seed_keyword_data"] ? AmazonKeywordData.fromJS(data["seed_keyword_data"]) : <any>undefined;
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsAmazonRelatedKeywordsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonRelatedKeywordsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonRelatedKeywordsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["seed_keyword"] = this.seed_keyword;
        data["seed_keyword_data"] = this.seed_keyword_data ? AmazonKeywordData.fromJS(this.seed_keyword_data)?.toJSON() : <any>undefined;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
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
import { DataforseoTrendsDemographyElementItem, IDataforseoTrendsDemographyElementItem } from "./BaseKeywordDataDataforseoTrendsItem";


export interface IKeywordsDataDataforseoTrendsDemographyLiveResultInfo   {
        
        /** keywords in a POST array */
        keywords?: string[] | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** location code in a POST array
if there is no data, then the value is null */
        location_code?: number | undefined
        
        /** language code in a POST array
if there is no data, then the value is null */
        language_code?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains keyword popularity and related data */
        items?: DataforseoTrendsDemographyElementItem[] | undefined

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsDemographyLiveResultInfo  implements IKeywordsDataDataforseoTrendsDemographyLiveResultInfo {

    
    /** keywords in a POST array */

    keywords?: string[] | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** location code in a POST array
if there is no data, then the value is null */

    location_code?: number | undefined;

    
    /** language code in a POST array
if there is no data, then the value is null */

    language_code?: string | undefined;

    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains keyword popularity and related data */

    items?: DataforseoTrendsDemographyElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsDemographyLiveResultInfo) {

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
            this.keywords = data["keywords"];
            this.type = data["type"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoTrendsDemographyElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsDemographyLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsDemographyLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["type"] = this.type;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["datetime"] = this.datetime;
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
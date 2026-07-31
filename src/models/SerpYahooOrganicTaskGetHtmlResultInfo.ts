import { HtmlItemInfo, IHtmlItemInfo } from "./HtmlItemInfo";


export interface ISerpYahooOrganicTaskGetHtmlResultInfo   {
        
        /** *keyword received in a POST array***keyword is returned with decoded %## (plus symbol '+' will be decoded to a space character)** */
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** *search engine domain in a POST array* */
        se_domain?: string | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *the number of results returned in the **`items`** array* */
        items_count?: number | undefined
        
        /** *elements of search results found in SERP* */
        items?: HtmlItemInfo[] | undefined

    [key: string]: any;

    }

export class SerpYahooOrganicTaskGetHtmlResultInfo  implements ISerpYahooOrganicTaskGetHtmlResultInfo {

    
    /** *keyword received in a POST array***keyword is returned with decoded %## (plus symbol '+' will be decoded to a space character)** */

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** *search engine domain in a POST array* */

    se_domain?: string | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *the number of results returned in the **`items`** array* */

    items_count?: number | undefined;

    
    /** *elements of search results found in SERP* */

    items?: HtmlItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpYahooOrganicTaskGetHtmlResultInfo) {

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
            this.keyword = data["keyword"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HtmlItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYahooOrganicTaskGetHtmlResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooOrganicTaskGetHtmlResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
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
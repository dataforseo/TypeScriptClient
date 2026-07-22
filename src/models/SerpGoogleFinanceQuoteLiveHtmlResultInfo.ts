import { HtmlItemInfo, IHtmlItemInfo } from "./HtmlItemInfo";


export interface ISerpGoogleFinanceQuoteLiveHtmlResultInfo   {
        
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        se_domain?: string | undefined
        
        location_code?: number | undefined
        
        language_code?: string | undefined
        
        datetime?: string | undefined
        
        items_count?: number | undefined
        
        items?: HtmlItemInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceQuoteLiveHtmlResultInfo  implements ISerpGoogleFinanceQuoteLiveHtmlResultInfo {

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    se_domain?: string | undefined;

    location_code?: number | undefined;

    language_code?: string | undefined;

    datetime?: string | undefined;

    items_count?: number | undefined;

    items?: HtmlItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceQuoteLiveHtmlResultInfo) {

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

    static fromJS(data: any): SerpGoogleFinanceQuoteLiveHtmlResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceQuoteLiveHtmlResultInfo();
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
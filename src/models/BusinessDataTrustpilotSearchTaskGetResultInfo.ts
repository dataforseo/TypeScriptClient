import { TrustpilotSearchOrganic, ITrustpilotSearchOrganic } from "./TrustpilotSearchOrganic";


export interface IBusinessDataTrustpilotSearchTaskGetResultInfo   {
        
        /** *keyword in a POST array* */
        keyword?: string | undefined
        
        /** *search engine domain in a POST array* */
        se_domain?: string | undefined
        
        /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *the number of items in the results array* you can get more results by using the `depth` parameter when setting a task */
        items_count?: number | undefined
        
        /** *found reviews* you can get more results by using the `depth` parameter when setting a task */
        items?: TrustpilotSearchOrganic[] | undefined

    [key: string]: any;

    }

export class BusinessDataTrustpilotSearchTaskGetResultInfo  implements IBusinessDataTrustpilotSearchTaskGetResultInfo {

    
    /** *keyword in a POST array* */

    keyword?: string | undefined;

    
    /** *search engine domain in a POST array* */

    se_domain?: string | undefined;

    
    /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *the number of items in the results array* you can get more results by using the `depth` parameter when setting a task */

    items_count?: number | undefined;

    
    /** *found reviews* you can get more results by using the `depth` parameter when setting a task */

    items?: TrustpilotSearchOrganic[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTrustpilotSearchTaskGetResultInfo) {

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
            this.se_domain = data["se_domain"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TrustpilotSearchOrganic.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTrustpilotSearchTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTrustpilotSearchTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["se_domain"] = this.se_domain;
        data["check_url"] = this.check_url;
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
import { TripadvisorSearchOrganic, ITripadvisorSearchOrganic } from "./TripadvisorSearchOrganic";


export interface IBusinessDataTripadvisorSearchTaskGetResultInfo   {
        
        /** keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array */
        keyword?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** item types encountered in the result
possible item types: tripadvisor_search_organic */
        item_types?: string[] | undefined
        
        /** the total number of results */
        se_results_count?: number | undefined
        
        /** the number of items in the results array
you can get more results by using the depth parameter when setting a task */
        items_count?: number | undefined
        
        /** Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task */
        items?: TripadvisorSearchOrganic[] | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorSearchTaskGetResultInfo  implements IBusinessDataTripadvisorSearchTaskGetResultInfo {

    
    /** keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array */

    keyword?: string | undefined;

    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** item types encountered in the result
possible item types: tripadvisor_search_organic */

    item_types?: string[] | undefined;

    
    /** the total number of results */

    se_results_count?: number | undefined;

    
    /** the number of items in the results array
you can get more results by using the depth parameter when setting a task */

    items_count?: number | undefined;

    
    /** Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task */

    items?: TripadvisorSearchOrganic[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorSearchTaskGetResultInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.item_types = data["item_types"];
            this.se_results_count = data["se_results_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TripadvisorSearchOrganic.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorSearchTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorSearchTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["item_types"] = this.item_types;
        data["se_results_count"] = this.se_results_count;
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
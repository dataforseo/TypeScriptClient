import { AppStoreSearchOrganic, IAppStoreSearchOrganic } from "./AppStoreSearchOrganic";


export interface IAppDataAppleAppSearchesTaskGetAdvancedResultInfo   {
        
        /** keyword received in a POST request */
        keyword?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results
in this case, the value will be null */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** the total number of results */
        se_results_count?: number | undefined
        
        /** the number of items in the results array */
        items_count?: number | undefined
        
        /** found apps */
        items?: AppStoreSearchOrganic[] | undefined

    [key: string]: any;

    }

export class AppDataAppleAppSearchesTaskGetAdvancedResultInfo  implements IAppDataAppleAppSearchesTaskGetAdvancedResultInfo {

    
    /** keyword received in a POST request */

    keyword?: string | undefined;

    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to search engine results
in this case, the value will be null */

    check_url?: string | undefined;

    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** the total number of results */

    se_results_count?: number | undefined;

    
    /** the number of items in the results array */

    items_count?: number | undefined;

    
    /** found apps */

    items?: AppStoreSearchOrganic[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppSearchesTaskGetAdvancedResultInfo) {

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
            this.se_results_count = data["se_results_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AppStoreSearchOrganic.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleAppSearchesTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppSearchesTaskGetAdvancedResultInfo();
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
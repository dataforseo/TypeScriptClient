import { AppStoreInfoOrganic, IAppStoreInfoOrganic } from "./AppStoreInfoOrganic";


export interface IAppDataAppleAppListingsSearchLiveItem   {
        
        /** ID of the returned app */
        app_id?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00 */
        time_update?: string | undefined
        
        /** detailed information about the app */
        item?: AppStoreInfoOrganic | undefined

    [key: string]: any;

    }

export class AppDataAppleAppListingsSearchLiveItem  implements IAppDataAppleAppListingsSearchLiveItem {

    
    /** ID of the returned app */

    app_id?: string | undefined;

    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to search engine results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00 */

    time_update?: string | undefined;

    
    /** detailed information about the app */

    item?: AppStoreInfoOrganic | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppleAppListingsSearchLiveItem) {

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
            this.app_id = data["app_id"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.time_update = data["time_update"];
            this.item = data["item"] ? AppStoreInfoOrganic.fromJS(data["item"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppDataAppleAppListingsSearchLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppListingsSearchLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_id"] = this.app_id;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["time_update"] = this.time_update;
        data["item"] = this.item ? AppStoreInfoOrganic.fromJS(this.item)?.toJSON() : <any>undefined;
        return data;
    }
}
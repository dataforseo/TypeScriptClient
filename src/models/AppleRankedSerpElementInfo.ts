import { AppStoreSearchOrganic, IAppStoreSearchOrganic } from "./AppStoreSearchOrganic";


export interface IAppleRankedSerpElementInfo   {
        
        /** *search engine type* */
        se_type?: string | undefined
        
        /** *contains data on the SERP element* the list of supported SERP elements can be found below */
        serp_item?: AppStoreSearchOrganic | undefined
        
        /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *number of search results for the returned keyword* */
        se_results_count?: number | undefined
        
        /** *date and time when keyword data was updated* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”; example: `2019-11-15 12:57:46 +00:00` */
        last_updated_time?: string | undefined
        
        /** *previous to the most recent date and time when SERP data was updated* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-10-15 12:57:46 +00:00`; in this case, will equal null */
        previous_updated_time?: string | undefined

    [key: string]: any;

    }

export class AppleRankedSerpElementInfo  implements IAppleRankedSerpElementInfo {

    
    /** *search engine type* */

    se_type?: string | undefined;

    
    /** *contains data on the SERP element* the list of supported SERP elements can be found below */

    serp_item?: AppStoreSearchOrganic | undefined;

    
    /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *number of search results for the returned keyword* */

    se_results_count?: number | undefined;

    
    /** *date and time when keyword data was updated* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”; example: `2019-11-15 12:57:46 +00:00` */

    last_updated_time?: string | undefined;

    
    /** *previous to the most recent date and time when SERP data was updated* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-10-15 12:57:46 +00:00`; in this case, will equal null */

    previous_updated_time?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppleRankedSerpElementInfo) {

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
            this.serp_item = data["serp_item"] ? AppStoreSearchOrganic.fromJS(data["serp_item"]) : <any>undefined;
            this.check_url = data["check_url"];
            this.se_results_count = data["se_results_count"];
            this.last_updated_time = data["last_updated_time"];
            this.previous_updated_time = data["previous_updated_time"];
        }
    }

    static fromJS(data: any): AppleRankedSerpElementInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppleRankedSerpElementInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["serp_item"] = this.serp_item ? AppStoreSearchOrganic.fromJS(this.serp_item)?.toJSON() : <any>undefined;
        data["check_url"] = this.check_url;
        data["se_results_count"] = this.se_results_count;
        data["last_updated_time"] = this.last_updated_time;
        data["previous_updated_time"] = this.previous_updated_time;
        return data;
    }
}
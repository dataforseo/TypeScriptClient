import { AppendixStatusEndpointsInfo, IAppendixStatusEndpointsInfo } from "./AppendixStatusEndpointsInfo";


export interface IAppendixStatusResultInfo   {
        
        /** name of the API
the list of APIs:
serp
keywords_data
appendix
dataforseo_labs
domain_analytics
merchant
on_page
business_data
backlinks
app_data
content_analysis
content_generation */
        api?: string | undefined
        
        /** current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay */
        status?: string | undefined
        
        /** array of objects that contain status information for API endpoints */
        endpoints?: AppendixStatusEndpointsInfo[] | undefined

    [key: string]: any;

    }

export class AppendixStatusResultInfo  implements IAppendixStatusResultInfo {

    
    /** name of the API
the list of APIs:
serp
keywords_data
appendix
dataforseo_labs
domain_analytics
merchant
on_page
business_data
backlinks
app_data
content_analysis
content_generation */

    api?: string | undefined;

    
    /** current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay */

    status?: string | undefined;

    
    /** array of objects that contain status information for API endpoints */

    endpoints?: AppendixStatusEndpointsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAppendixStatusResultInfo) {

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
            this.api = data["api"];
            this.status = data["status"];
            if (Array.isArray(data["endpoints"])) {
                this.endpoints = [];
                for (let item of data["endpoints"]) {
                    this.endpoints.push(AppendixStatusEndpointsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppendixStatusResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixStatusResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["api"] = this.api;
        data["status"] = this.status;
        data["endpoints"] = null;
        if (Array.isArray(this.endpoints)) {
            data["endpoints"] = [];
            for (let item of this.endpoints) {
                if (item && typeof item.toJSON === "function") {
                    data["endpoints"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}
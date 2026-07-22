import { WaterfallResourceInfo, IWaterfallResourceInfo } from "./WaterfallResourceInfo";


export interface IOnPageWaterfallItem   {
        
        /** URL of the page */
        page_url?: string | undefined
        
        /** Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds) */
        time_to_interactive?: number | undefined
        
        /** time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds) */
        dom_complete?: number | undefined
        
        /** time to connect to a server
the time it takes until the connection with a server is established (in milliseconds) */
        connection_time?: number | undefined
        
        /** time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds) */
        time_to_secure_connection?: number | undefined
        
        /** time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds) */
        request_sent_time?: number | undefined
        
        /** time to first byte (TTFB) in milliseconds */
        waiting_time?: number | undefined
        
        /** time it takes for a browser to receive a response (in milliseconds) */
        download_time?: number | undefined
        
        /** total time it takes until a browser receives a complete response from a server (in milliseconds) */
        duration_time?: number | undefined
        
        /** time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page */
        fetch_start?: number | undefined
        
        /** time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page */
        fetch_end?: number | undefined
        
        /** resource-specific timing
contains separate arrays with timing for each resource found on the page */
        resources?: WaterfallResourceInfo[] | undefined

    [key: string]: any;

    }

export class OnPageWaterfallItem  implements IOnPageWaterfallItem {

    
    /** URL of the page */

    page_url?: string | undefined;

    
    /** Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds) */

    time_to_interactive?: number | undefined;

    
    /** time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds) */

    dom_complete?: number | undefined;

    
    /** time to connect to a server
the time it takes until the connection with a server is established (in milliseconds) */

    connection_time?: number | undefined;

    
    /** time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds) */

    time_to_secure_connection?: number | undefined;

    
    /** time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds) */

    request_sent_time?: number | undefined;

    
    /** time to first byte (TTFB) in milliseconds */

    waiting_time?: number | undefined;

    
    /** time it takes for a browser to receive a response (in milliseconds) */

    download_time?: number | undefined;

    
    /** total time it takes until a browser receives a complete response from a server (in milliseconds) */

    duration_time?: number | undefined;

    
    /** time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page */

    fetch_start?: number | undefined;

    
    /** time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page */

    fetch_end?: number | undefined;

    
    /** resource-specific timing
contains separate arrays with timing for each resource found on the page */

    resources?: WaterfallResourceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageWaterfallItem) {

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
            this.page_url = data["page_url"];
            this.time_to_interactive = data["time_to_interactive"];
            this.dom_complete = data["dom_complete"];
            this.connection_time = data["connection_time"];
            this.time_to_secure_connection = data["time_to_secure_connection"];
            this.request_sent_time = data["request_sent_time"];
            this.waiting_time = data["waiting_time"];
            this.download_time = data["download_time"];
            this.duration_time = data["duration_time"];
            this.fetch_start = data["fetch_start"];
            this.fetch_end = data["fetch_end"];
            if (Array.isArray(data["resources"])) {
                this.resources = [];
                for (let item of data["resources"]) {
                    this.resources.push(WaterfallResourceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageWaterfallItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageWaterfallItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page_url"] = this.page_url;
        data["time_to_interactive"] = this.time_to_interactive;
        data["dom_complete"] = this.dom_complete;
        data["connection_time"] = this.connection_time;
        data["time_to_secure_connection"] = this.time_to_secure_connection;
        data["request_sent_time"] = this.request_sent_time;
        data["waiting_time"] = this.waiting_time;
        data["download_time"] = this.download_time;
        data["duration_time"] = this.duration_time;
        data["fetch_start"] = this.fetch_start;
        data["fetch_end"] = this.fetch_end;
        data["resources"] = null;
        if (Array.isArray(this.resources)) {
            data["resources"] = [];
            for (let item of this.resources) {
                if (item && typeof item.toJSON === "function") {
                    data["resources"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}
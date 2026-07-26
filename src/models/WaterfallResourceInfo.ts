import { OnPageResourceLocationInfo, IOnPageResourceLocationInfo } from "./OnPageResourceLocationInfo";


export interface IWaterfallResourceInfo   {
        
        resource_type?: string | undefined
        
        /** resource URL */
        url?: string | undefined
        
        /** resource initiator */
        initiator?: string | undefined
        
        /** total time it takes until a browser receives a complete response from a server (in milliseconds) */
        duration_time?: number | undefined
        
        /** time to start downloading the HTML resource the amount of time the browser needs to start downloading a page */
        fetch_start?: number | undefined
        
        /** time to complete downloading the HTML resource the amount of time the browser needs to complete downloading a page */
        fetch_end?: number | undefined
        
        /** location of the resource in the document parameters defining the location of the specific resource within the document’s HTML */
        location?: OnPageResourceLocationInfo | undefined
        
        /** indicates whether the resource blocks rendering */
        is_render_blocking?: boolean | undefined

    [key: string]: any;

    }

export class WaterfallResourceInfo  implements IWaterfallResourceInfo {

    resource_type?: string | undefined;

    
    /** resource URL */

    url?: string | undefined;

    
    /** resource initiator */

    initiator?: string | undefined;

    
    /** total time it takes until a browser receives a complete response from a server (in milliseconds) */

    duration_time?: number | undefined;

    
    /** time to start downloading the HTML resource the amount of time the browser needs to start downloading a page */

    fetch_start?: number | undefined;

    
    /** time to complete downloading the HTML resource the amount of time the browser needs to complete downloading a page */

    fetch_end?: number | undefined;

    
    /** location of the resource in the document parameters defining the location of the specific resource within the document’s HTML */

    location?: OnPageResourceLocationInfo | undefined;

    
    /** indicates whether the resource blocks rendering */

    is_render_blocking?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IWaterfallResourceInfo) {

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
            this.resource_type = data["resource_type"];
            this.url = data["url"];
            this.initiator = data["initiator"];
            this.duration_time = data["duration_time"];
            this.fetch_start = data["fetch_start"];
            this.fetch_end = data["fetch_end"];
            this.location = data["location"] ? OnPageResourceLocationInfo.fromJS(data["location"]) : <any>undefined;
            this.is_render_blocking = data["is_render_blocking"];
        }
    }

    static fromJS(data: any): WaterfallResourceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new WaterfallResourceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["resource_type"] = this.resource_type;
        data["url"] = this.url;
        data["initiator"] = this.initiator;
        data["duration_time"] = this.duration_time;
        data["fetch_start"] = this.fetch_start;
        data["fetch_end"] = this.fetch_end;
        data["location"] = this.location ? OnPageResourceLocationInfo.fromJS(this.location)?.toJSON() : <any>undefined;
        data["is_render_blocking"] = this.is_render_blocking;
        return data;
    }
}
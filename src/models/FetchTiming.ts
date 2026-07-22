export interface IFetchTiming   {
        
        /** total time it takes until a browser receives a complete response from a server (in milliseconds) */
        duration_time?: number | undefined
        
        /** time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page */
        fetch_start?: number | undefined
        
        /** time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page */
        fetch_end?: number | undefined

    [key: string]: any;

    }

export class FetchTiming  implements IFetchTiming {

    
    /** total time it takes until a browser receives a complete response from a server (in milliseconds) */

    duration_time?: number | undefined;

    
    /** time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page */

    fetch_start?: number | undefined;

    
    /** time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page */

    fetch_end?: number | undefined;

    [key: string]: any;


    constructor(data?: IFetchTiming) {

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
            this.duration_time = data["duration_time"];
            this.fetch_start = data["fetch_start"];
            this.fetch_end = data["fetch_end"];
        }
    }

    static fromJS(data: any): FetchTiming {
        data = typeof data === 'object' ? data : {};


        let result = new FetchTiming();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["duration_time"] = this.duration_time;
        data["fetch_start"] = this.fetch_start;
        data["fetch_end"] = this.fetch_end;
        return data;
    }
}
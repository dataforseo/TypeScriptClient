export interface ICacheControl   {
        
        /** indicates whether the page is cacheable */
        cachable?: boolean | undefined
        
        /** time to live the amount of time the browser caches a resource */
        ttl?: number | undefined

    [key: string]: any;

    }

export class CacheControl  implements ICacheControl {

    
    /** indicates whether the page is cacheable */

    cachable?: boolean | undefined;

    
    /** time to live the amount of time the browser caches a resource */

    ttl?: number | undefined;

    [key: string]: any;


    constructor(data?: ICacheControl) {

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
            this.cachable = data["cachable"];
            this.ttl = data["ttl"];
        }
    }

    static fromJS(data: any): CacheControl {
        data = typeof data === 'object' ? data : {};


        let result = new CacheControl();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["cachable"] = this.cachable;
        data["ttl"] = this.ttl;
        return data;
    }
}
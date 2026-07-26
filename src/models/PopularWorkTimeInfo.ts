import { TimeInfo, ITimeInfo } from "./TimeInfo";


export interface IPopularWorkTimeInfo   {
        
        /** hours in the 24-hour format */
        time?: TimeInfo | undefined
        
        /** popularity index relative time-bound popularity index measured from 0 to 100; higher value corresponds to a busier time of a day */
        popular_index?: number | undefined

    [key: string]: any;

    }

export class PopularWorkTimeInfo  implements IPopularWorkTimeInfo {

    
    /** hours in the 24-hour format */

    time?: TimeInfo | undefined;

    
    /** popularity index relative time-bound popularity index measured from 0 to 100; higher value corresponds to a busier time of a day */

    popular_index?: number | undefined;

    [key: string]: any;


    constructor(data?: IPopularWorkTimeInfo) {

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
            this.time = data["time"] ? TimeInfo.fromJS(data["time"]) : <any>undefined;
            this.popular_index = data["popular_index"];
        }
    }

    static fromJS(data: any): PopularWorkTimeInfo {
        data = typeof data === 'object' ? data : {};


        let result = new PopularWorkTimeInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["time"] = this.time ? TimeInfo.fromJS(this.time)?.toJSON() : <any>undefined;
        data["popular_index"] = this.popular_index;
        return data;
    }
}
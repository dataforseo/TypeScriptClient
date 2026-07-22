export interface ITimeInfo   {
        
        /** hours in the 24-hour format */
        hour?: number | undefined
        
        /** minutes */
        minute?: number | undefined

    [key: string]: any;

    }

export class TimeInfo  implements ITimeInfo {

    
    /** hours in the 24-hour format */

    hour?: number | undefined;

    
    /** minutes */

    minute?: number | undefined;

    [key: string]: any;


    constructor(data?: ITimeInfo) {

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
            this.hour = data["hour"];
            this.minute = data["minute"];
        }
    }

    static fromJS(data: any): TimeInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TimeInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["hour"] = this.hour;
        data["minute"] = this.minute;
        return data;
    }
}
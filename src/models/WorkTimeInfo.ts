export interface IWorkTimeInfo   {
        
        /** hours in the 24-hour format */
        hour?: number | undefined
        
        /** minutes */
        minute?: number | undefined

    [key: string]: any;

    }

export class WorkTimeInfo  implements IWorkTimeInfo {
    
    /** hours in the 24-hour format */

    hour?: number | undefined;
    
    /** minutes */

    minute?: number | undefined;

    [key: string]: any;


    constructor(data?: IWorkTimeInfo) {

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

    static fromJS(data: any): WorkTimeInfo {
        data = typeof data === 'object' ? data : {};


        let result = new WorkTimeInfo();
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
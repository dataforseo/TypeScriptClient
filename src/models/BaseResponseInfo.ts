export interface IBaseResponseInfo   {
        
        /** the current version of the API */
        version?: string | undefined
        
        /** general status code you can find the full list of the response codes here */
        status_code?: number | undefined
        
        /** general informational message you can find the full list of general informational messages here */
        status_message?: string | undefined
        
        /** total execution time, seconds */
        time?: string | undefined
        
        /** total tasks cost, USD */
        cost?: number | undefined
        
        /** the number of tasks in the tasks array */
        tasks_count?: number | undefined
        
        /** the number of tasks in the tasks array returned with an error */
        tasks_error?: number | undefined

    [key: string]: any;

    }

export class BaseResponseInfo  implements IBaseResponseInfo {

    
    /** the current version of the API */

    version?: string | undefined;

    
    /** general status code you can find the full list of the response codes here */

    status_code?: number | undefined;

    
    /** general informational message you can find the full list of general informational messages here */

    status_message?: string | undefined;

    
    /** total execution time, seconds */

    time?: string | undefined;

    
    /** total tasks cost, USD */

    cost?: number | undefined;

    
    /** the number of tasks in the tasks array */

    tasks_count?: number | undefined;

    
    /** the number of tasks in the tasks array returned with an error */

    tasks_error?: number | undefined;

    [key: string]: any;


    constructor(data?: IBaseResponseInfo) {

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
            this.version = data["version"];
            this.status_code = data["status_code"];
            this.status_message = data["status_message"];
            this.time = data["time"];
            this.cost = data["cost"];
            this.tasks_count = data["tasks_count"];
            this.tasks_error = data["tasks_error"];
        }
    }

    static fromJS(data: any): BaseResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BaseResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["version"] = this.version;
        data["status_code"] = this.status_code;
        data["status_message"] = this.status_message;
        data["time"] = this.time;
        data["cost"] = this.cost;
        data["tasks_count"] = this.tasks_count;
        data["tasks_error"] = this.tasks_error;
        return data;
    }
}
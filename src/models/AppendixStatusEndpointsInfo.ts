export interface IAppendixStatusEndpointsInfo   {
        
        /** name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback */
        endpoint?: string | undefined
        
        /** current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay */
        status?: string | undefined

    [key: string]: any;

    }

export class AppendixStatusEndpointsInfo  implements IAppendixStatusEndpointsInfo {

    
    /** name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback */

    endpoint?: string | undefined;

    
    /** current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay */

    status?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppendixStatusEndpointsInfo) {

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
            this.endpoint = data["endpoint"];
            this.status = data["status"];
        }
    }

    static fromJS(data: any): AppendixStatusEndpointsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixStatusEndpointsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["endpoint"] = this.endpoint;
        data["status"] = this.status;
        return data;
    }
}
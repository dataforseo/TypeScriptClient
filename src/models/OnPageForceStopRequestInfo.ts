export interface IOnPageForceStopRequestInfo   {
        
        /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array */
        id?: string | undefined

    [key: string]: any;

    }

export class OnPageForceStopRequestInfo  implements IOnPageForceStopRequestInfo {

    
    /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array */

    id?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageForceStopRequestInfo) {

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
            this.id = data["id"];
        }
    }

    static fromJS(data: any): OnPageForceStopRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageForceStopRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        return data;
    }
}
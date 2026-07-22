export interface IOnPageLighthouseTasksReadyResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined
        
        /** URL for collecting the results of the OnPage Lighthouse JSON task */
        endpoint_json?: string | undefined

    [key: string]: any;

    }

export class OnPageLighthouseTasksReadyResultInfo  implements IOnPageLighthouseTasksReadyResultInfo {

    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string | undefined;

    
    /** user-defined task identifier */

    tag?: string | undefined;

    
    /** URL for collecting the results of the OnPage Lighthouse JSON task */

    endpoint_json?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseTasksReadyResultInfo) {

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
            this.tag = data["tag"];
            this.endpoint_json = data["endpoint_json"];
        }
    }

    static fromJS(data: any): OnPageLighthouseTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseTasksReadyResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["tag"] = this.tag;
        data["endpoint_json"] = this.endpoint_json;
        return data;
    }
}
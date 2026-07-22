export interface IOnPageTasksReadyResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** target website specified when setting a task */
        target?: string | undefined
        
        /** date when the task was posted (in the UTC format) */
        date_posted?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageTasksReadyResultInfo  implements IOnPageTasksReadyResultInfo {

    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string | undefined;

    
    /** target website specified when setting a task */

    target?: string | undefined;

    
    /** date when the task was posted (in the UTC format) */

    date_posted?: string | undefined;

    
    /** user-defined task identifier */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageTasksReadyResultInfo) {

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
            this.target = data["target"];
            this.date_posted = data["date_posted"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageTasksReadyResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["target"] = this.target;
        data["date_posted"] = this.date_posted;
        data["tag"] = this.tag;
        return data;
    }
}
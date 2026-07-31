import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAppendixWebhookResendTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* the value of this array is always `null`; you can get the results by the preferred method of results delivery (pingback or postback) you specified when setting a task */
        result?: any | undefined

    [key: string]: any;

    }

export class AppendixWebhookResendTaskInfo  extends BaseResponseTaskInfo   implements IAppendixWebhookResendTaskInfo {

    
    /** *array of results* the value of this array is always `null`; you can get the results by the preferred method of results delivery (pingback or postback) you specified when setting a task */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IAppendixWebhookResendTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): AppendixWebhookResendTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixWebhookResendTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleEventsTaskPostTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleEventsTaskPostTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleEventsTaskPostTaskInfo {

    result?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleEventsTaskPostTaskInfo) {
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

    static fromJS(data: any): SerpGoogleEventsTaskPostTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleEventsTaskPostTaskInfo();
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
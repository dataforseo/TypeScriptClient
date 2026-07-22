import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleLocalFinderTaskPostTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderTaskPostTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleLocalFinderTaskPostTaskInfo {

    result?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderTaskPostTaskInfo) {
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

    static fromJS(data: any): SerpGoogleLocalFinderTaskPostTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderTaskPostTaskInfo();
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
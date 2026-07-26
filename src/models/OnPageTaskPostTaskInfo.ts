import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageTaskPostTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results in this case, the value will be null */
        result?: any | undefined

    [key: string]: any;

    }

export class OnPageTaskPostTaskInfo  extends BaseResponseTaskInfo   implements IOnPageTaskPostTaskInfo {

    
    /** array of results in this case, the value will be null */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IOnPageTaskPostTaskInfo) {
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

    static fromJS(data: any): OnPageTaskPostTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageTaskPostTaskInfo();
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
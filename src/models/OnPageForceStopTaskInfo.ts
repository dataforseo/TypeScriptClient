import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageForceStopTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: any | undefined

    [key: string]: any;

    }

export class OnPageForceStopTaskInfo  extends BaseResponseTaskInfo   implements IOnPageForceStopTaskInfo {

    
    /** *array of results* */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IOnPageForceStopTaskInfo) {
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

    static fromJS(data: any): OnPageForceStopTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageForceStopTaskInfo();
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
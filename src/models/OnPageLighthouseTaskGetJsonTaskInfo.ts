import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageLighthouseTaskGetJsonTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** results of Lighthouse audit
this array will include data according to the parameters specified in the POST request;
description of the fields in the result array is available in the official documentation */
        result?: { [key: string]: any; }[] | undefined

    [key: string]: any;

    }

export class OnPageLighthouseTaskGetJsonTaskInfo  extends BaseResponseTaskInfo   implements IOnPageLighthouseTaskGetJsonTaskInfo {

    
    /** results of Lighthouse audit
this array will include data according to the parameters specified in the POST request;
description of the fields in the result array is available in the official documentation */

    result?: { [key: string]: any; }[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseTaskGetJsonTaskInfo) {
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

    static fromJS(data: any): OnPageLighthouseTaskGetJsonTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseTaskGetJsonTaskInfo();
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
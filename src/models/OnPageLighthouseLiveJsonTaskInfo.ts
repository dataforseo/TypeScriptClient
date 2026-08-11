import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageLighthouseLiveJsonTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *results of Lighthouse audit* this array will include data according to the parameters you specified when setting a task; all fields and their descriptions are available in the official documentation [by this link.](https://github.com/GoogleChrome/lighthouse/blob/master/readme.md) */
        result?: { [key: string]: any; }[] | undefined

    [key: string]: any;

    }

export class OnPageLighthouseLiveJsonTaskInfo  extends BaseResponseTaskInfo   implements IOnPageLighthouseLiveJsonTaskInfo {

    
    /** *results of Lighthouse audit* this array will include data according to the parameters you specified when setting a task; all fields and their descriptions are available in the official documentation [by this link.](https://github.com/GoogleChrome/lighthouse/blob/master/readme.md) */

    result?: { [key: string]: any; }[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseLiveJsonTaskInfo) {
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

    static fromJS(data: any): OnPageLighthouseLiveJsonTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseLiveJsonTaskInfo();
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
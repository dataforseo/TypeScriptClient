import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageLighthouseTaskGetJsonTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: { [key: string]: any; }[] | undefined

    [key: string]: any;

    }

export class OnPageLighthouseTaskGetJsonTaskInfo  extends BaseResponseTaskInfo   implements IOnPageLighthouseTaskGetJsonTaskInfo {

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
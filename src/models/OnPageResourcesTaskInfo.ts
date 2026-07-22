import { OnPageResourcesResultInfo, IOnPageResourcesResultInfo } from "./OnPageResourcesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IOnPageResourcesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: OnPageResourcesResultInfo[] | undefined

    [key: string]: any;

    }

export class OnPageResourcesTaskInfo  extends BaseResponseTaskInfo   implements IOnPageResourcesTaskInfo {

    
    /** array of results */

    result?: OnPageResourcesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageResourcesTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["result"])) {
                this.result = [];
                for (let item of data["result"]) {
                    this.result.push(OnPageResourcesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageResourcesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourcesTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = null;
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result) {
                if (item && typeof item.toJSON === "function") {
                    data["result"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}
import { SerpErrorsResultInfo, ISerpErrorsResultInfo } from "./SerpErrorsResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpErrorsTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpErrorsResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpErrorsTaskInfo  extends BaseResponseTaskInfo   implements ISerpErrorsTaskInfo {

    
    /** array of results */

    result?: SerpErrorsResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpErrorsTaskInfo) {
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
                    this.result.push(SerpErrorsResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpErrorsTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpErrorsTaskInfo();
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
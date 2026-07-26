import { BacklinksErrorsResultInfo, IBacklinksErrorsResultInfo } from "./BacklinksErrorsResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBacklinksErrorsTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BacklinksErrorsResultInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksErrorsTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksErrorsTaskInfo {

    
    /** *array of results* */

    result?: BacklinksErrorsResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksErrorsTaskInfo) {
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
                    this.result.push(BacklinksErrorsResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksErrorsTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksErrorsTaskInfo();
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
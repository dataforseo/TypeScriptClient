import { BusinessDataTripadvisorSearchTaskGetResultInfo, IBusinessDataTripadvisorSearchTaskGetResultInfo } from "./BusinessDataTripadvisorSearchTaskGetResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataTripadvisorSearchTaskGetTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BusinessDataTripadvisorSearchTaskGetResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorSearchTaskGetTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataTripadvisorSearchTaskGetTaskInfo {

    
    /** *array of results* */

    result?: BusinessDataTripadvisorSearchTaskGetResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorSearchTaskGetTaskInfo) {
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
                    this.result.push(BusinessDataTripadvisorSearchTaskGetResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorSearchTaskGetTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorSearchTaskGetTaskInfo();
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
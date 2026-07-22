import { BusinessDataGoogleMyBusinessInfoTaskGetResultInfo, IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo } from "./BusinessDataGoogleMyBusinessInfoTaskGetResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataGoogleMyBusinessInfoTaskGetTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BusinessDataGoogleMyBusinessInfoTaskGetResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleMyBusinessInfoTaskGetTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleMyBusinessInfoTaskGetTaskInfo {

    
    /** array of results */

    result?: BusinessDataGoogleMyBusinessInfoTaskGetResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleMyBusinessInfoTaskGetTaskInfo) {
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
                    this.result.push(BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleMyBusinessInfoTaskGetTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleMyBusinessInfoTaskGetTaskInfo();
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
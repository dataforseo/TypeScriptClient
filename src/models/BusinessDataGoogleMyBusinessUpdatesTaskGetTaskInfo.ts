import { BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo, IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo } from "./BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo {

    
    /** *array of results* */

    result?: BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo) {
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
                    this.result.push(BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleMyBusinessUpdatesTaskGetTaskInfo();
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
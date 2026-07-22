import { BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo, IBusinessDataGoogleMyBusinessInfoTaskPostTaskInfo } from "./BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo  extends BaseResponseInfo   implements IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo {

    
    /** array of tasks */

    tasks?: BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}
import { BusinessDataTripadvisorSearchTaskPostTaskInfo, IBusinessDataTripadvisorSearchTaskPostTaskInfo } from "./BusinessDataTripadvisorSearchTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IBusinessDataTripadvisorSearchTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BusinessDataTripadvisorSearchTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorSearchTaskPostResponseInfo  extends BaseResponseInfo   implements IBusinessDataTripadvisorSearchTaskPostResponseInfo {

    
    /** array of tasks */

    tasks?: BusinessDataTripadvisorSearchTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorSearchTaskPostResponseInfo) {
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
                    this.tasks.push(BusinessDataTripadvisorSearchTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorSearchTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorSearchTaskPostResponseInfo();
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